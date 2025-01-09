import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getName } from "../User/reducerUserSlice";
import { Form, redirect } from "react-router-dom";
import { getBillOfTotalPrice, getCart } from "../Cart/reducerCartSlice";
import { postUser } from "../../services/servicesRestaurantApi";
import { useState } from "react";
import { calcTotalPriceWithPriority } from "../../utilities/helper";
/* eslint-disable react/react-in-jsx-scope */
const phoneRegex = /^\+?[0-9]{1,3}?[-.\s]?(\(?[0-9]{1,4}?\)?[-.\s]?){1,4}[0-9]{1,4}$/;

function CreateOrder() {
  const name = useSelector((state) => getName(state));
  let billTotalPrice = useSelector((state) => getBillOfTotalPrice(state));
  const cart = useSelector((state) => getCart(state));

  let priorityPrice = 0;

  const [isPriority, setIsPriority] = useState(false);

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

        <div className="flex items-center justify-between">
          <label className="hidden basis-40 capitalize sm:inline-block" htmlFor="phone">
            phone number
          </label>
          <input
            required
            placeholder="phone number"
            className="input py-2 placeholder:text-xs placeholder:capitalize sm:placeholder:opacity-0"
            type="tel"
            name="phoneNumber"
            id="phone"
          />
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
          <Button type={"primary"}>order now for &euro;{Number(billTotalPrice).toFixed(2)}</Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data.priority);

  if (!phoneRegex.test(data.phoneNumber)) return;

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
    return { error: "Failed to create order" }; // Handle errors gracefully
  }
}

export default CreateOrder;
