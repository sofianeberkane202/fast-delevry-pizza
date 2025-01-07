/* eslint-disable react/react-in-jsx-scope */

import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./reducerCartSlice";
import CartEmpty from "./CartEmpty";

function CartPage() {
  const cart = useSelector((state) => getCart(state));

  const { name } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="mt-4">
      <Button to={"/menu"} type={"link"} style={"text-sm"}>
        &larr; Back to menu
      </Button>

      {cart.length === 0 && <CartEmpty />}

      {cart.length > 0 && (
        <>
          <h2 className="mt-10 font-mono text-lg font-semibold tracking-wide">
            You cart, <span className="uppercase">{name}</span>
          </h2>
          <ul className="divide-y-2 divide-stone-200">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
          <div className="mt-4 space-x-3">
            <Button to={"/order/new"} type={"primary"}>
              Order pizzas
            </Button>
            <Button type={"secondary"} handleState={handleClearCart}>
              clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
