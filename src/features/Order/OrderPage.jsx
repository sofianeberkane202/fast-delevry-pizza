/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { getOrder } from "../../services/servicesRestaurantApi";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../Cart/reducerCartSlice";
import { useEffect } from "react";

// const fakeCart = [
//   {
//     pizzaId: 1,
//     name: "Margherita Margherita",
//     quantity: 1,
//     unitPrice: 12,
//     totalPrice: 12,
//     ingredients: ["tomato", "mozzarella", "basil"],
//   },
//   {
//     pizzaId: 2,
//     name: "Romana",
//     quantity: 3,
//     unitPrice: 15,
//     totalPrice: 45,
//     ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
//   },
//   {
//     pizzaId: 3,
//     name: "Prosciutto e Rucola",
//     quantity: 4,
//     unitPrice: 16,
//     totalPrice: 64,
//     ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
//   },
// ];

// const fakeOrder = {
//   id: "defr145dd",
//   firstName: "sofiane berkane",
//   phoneNumber: "072458964",
//   address: "Tazmalt Bejaia Algerie",
//   cart: fakeCart,
//   priority: true,
// };

function OrderPage() {
  // const order = fakeOrder;
  const data = useLoaderData();

  const dispatch = useDispatch();
  const cart = useSelector((state) => getCart(state));

  useEffect(
    function () {
      if (cart.length) {
        dispatch(clearCart());
      }
    },
    [cart.length],
  );

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    totalPrice: +data.totalPrice,
    priorityPrice: +data.priorityPrice,
  };

  return (
    <div className="mb-2 mt-4 grid gap-6 xs:mt-8 sm:gap-8">
      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row sm:gap-0">
        <h2 className="text-xl font-semibold">Order #{order.id} status</h2>
        <p className="flex items-center gap-2">
          {order.priority && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold uppercase text-stone-50">
              priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase text-stone-50">
            preparing order
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 bg-stone-200 p-4 sm:flex-row sm:gap-0">
        <p className="font-semibold">Only 42 minutes left 😃</p>
        <p className="text-xs text-stone-500">(Estimated delivery: Jan 8, 04:58 PM)</p>
      </div>

      <ul className="max-h-44 divide-y-2 divide-stone-200 overflow-y-auto px-2">
        {order.cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="grid gap-2 bg-stone-200 px-6 py-4">
        <p className="text-sm font-semibold text-stone-500">
          Price pizza: &euro;{Number(order.totalPrice - order.priorityPrice).toFixed(2)}
        </p>
        <p className="text-sm font-semibold text-stone-500">
          Price priority: &euro;{Number(order.priorityPrice).toFixed(2)}
        </p>
        <p className="text-sm font-semibold">To pay delivery: &euro;{Number(order.totalPrice).toFixed(2)}</p>
      </div>
    </div>
  );
}

function CartItem({ item }) {
  const { name, quantity, ingredients, unitPrice } = item;
  return (
    <li className="flex items-start justify-between py-2">
      <div className="grid gap-1">
        <p className="text-sm font-semibold">
          {quantity}x {name}
        </p>
        <p className="text-xs italic text-stone-500">
          {ingredients.map((ing) => ing.slice(0, 1).toUpperCase() + ing.slice(1)).join(", ")}
        </p>
      </div>
      <p className="text-sm font-bold">&euro;{Number(unitPrice).toFixed(2)}</p>
    </li>
  );
}

export async function loader({ params }) {
  const { id } = params;
  try {
    const order = await getOrder(id);
    return order;
  } catch (error) {
    return error;
  }
}

export default OrderPage;

CartItem.propTypes = {
  item: PropTypes.object,
};
