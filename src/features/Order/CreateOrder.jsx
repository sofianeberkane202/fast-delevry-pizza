import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getName } from "../User/reducerUserSlice";
import { Form, redirect, useNavigation, useRouteError } from "react-router-dom";
import { getBillOfTotalPrice, getCart } from "../Cart/reducerCartSlice";
import { postUser } from "../../services/servicesRestaurantApi";
import { useState } from "react";
import { calcTotalPriceWithPriority, phoneValidation } from "../../utilities/helper";
import Error from "./Error";
/* eslint-disable react/react-in-jsx-scope */

function CreateOrder() {
  const { state } = useNavigation();

  const name = useSelector((state) => getName(state));
  let billTotalPrice = useSelector((state) => getBillOfTotalPrice(state));
  const cart = useSelector((state) => getCart(state));

  let priorityPrice = 0;

  const [isPriority, setIsPriority] = useState(false);

  const error = useRouteError();
  const errorMessage = error?.data || "";
  const errorStatus = error?.status || null;

  function handelPriority() {
    setIsPriority(!isPriority);
  }

  if (isPriority) {
    const { totalPrice, priorityPrice: p } = calcTotalPriceWithPriority(isPriority, billTotalPrice);
    billTotalPrice = totalPrice;
    priorityPrice = p;
  }

  return (
    <div className="mt:3 py-2 sm:mt-4">
      <h1 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">Ready to order? Let&apos;s go!</h1>
      <Form method="post" className="grid gap-3 sm:gap-6">
        <div className="flex items-center justify-between">
          <label className="hidden basis-40 capitalize sm:inline-block" htmlFor="name">
            first name
          </label>
          <input
            required
            placeholder="first name"
            className="input py-2 placeholder:text-xs placeholder:capitalize sm:placeholder:opacity-0"
            type="text"
            name="firstName"
            id="name"
            defaultValue={name}
          />
        </div>

        <div className={`flex ${errorMessage ? "items-start" : "items-center"} justify-between`}>
          <label className={`hidden basis-40 capitalize sm:inline-block ${errorMessage ? "pt-2" : ""}`} htmlFor="phone">
            phone number
          </label>
          <div className="grid flex-1">
            <input
              required
              placeholder="phone number"
              className="input py-2 placeholder:text-xs placeholder:capitalize sm:placeholder:opacity-0"
              type="tel"
              name="phoneNumber"
              id="phone"
            />
            {errorMessage && <Error message={errorMessage} status={errorStatus} />}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="hidden basis-40 capitalize sm:inline-block" htmlFor="address">
            address
          </label>
          <input
            required
            placeholder="address"
            className="input py-2 placeholder:text-xs placeholder:capitalize sm:placeholder:opacity-0"
            type="text"
            name="address"
            id="address"
          />
        </div>

        <label htmlFor="priority" className="mt-4 flex items-center gap-2 sm:gap-4">
          <input
            className="h-4 w-4 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 sm:h-6 sm:w-6"
            type="checkbox"
            name="priority"
            id="priority"
            value={isPriority}
            onChange={() => handelPriority()}
          />
          <span className="text-sm sm:text-base">Want to yo give your order priority?</span>
          <input type="hidden" value={billTotalPrice} name="totalPrice" />
          <input type="hidden" value={priorityPrice} name="priorityPrice" />
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />
        </label>

        <div className="mt-4 sm:mt-6">
          <Button type={"primary"}>
            {state === "submitting" ? (
              <span>Loading...</span>
            ) : (
              <span>order now for &euro;{Number(billTotalPrice).toFixed(2)}</span>
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (!phoneValidation(data.phoneNumber))
    throw new Response("Please give us your correct phone number, We might need to contact you.", { status: 400 });

  const newCustomer = {
    ...data,
    priority: data.priority === "true",
  };

  try {
    // Send customer data to the server
    const result = await postUser(newCustomer);

    // Return a redirect to the order page with the new customer ID
    return redirect(`/order/${result.data.id}`);
  } catch (error) {
    console.error("Error posting user:", error);
    throw new Response("Failed to create order", { status: 500 });
  }
}

export default CreateOrder;
