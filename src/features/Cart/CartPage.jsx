/* eslint-disable react/react-in-jsx-scope */

import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 1,
    name: "Margherita Margherita",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
  },
  {
    pizzaId: 2,
    name: "Romana",
    quantity: 3,
    unitPrice: 15,
    totalPrice: 45,
  },
  {
    pizzaId: 3,
    name: "Prosciutto e Rucola",
    quantity: 4,
    unitPrice: 16,
    totalPrice: 64,
  },
];
function CartPage() {
  const cart = fakeCart;
  return (
    <div className="mt-4">
      <Button to={"/menu"} type={"link"} style={"text-sm"}>
        &larr; Back to menu
      </Button>
      <h2 className="mt-10 font-mono text-lg font-semibold tracking-wide">You cart, %Name%</h2>
      <ul className="divide-y-2 divide-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-4 space-x-3">
        <Button to={"/order/new"} type={"primary"}>
          Order pizzas
        </Button>
        <Button type={"secondary"}>clear cart</Button>
      </div>
    </div>
  );
}

export default CartPage;
