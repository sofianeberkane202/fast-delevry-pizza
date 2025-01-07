/* eslint-disable react/react-in-jsx-scope */

import { useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { getCart } from "./reducerCartSlice";

function CartPage() {
  const cart = useSelector((state) => getCart(state));
  console.log(cart);
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
