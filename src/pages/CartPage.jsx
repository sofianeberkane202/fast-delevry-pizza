/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";

import Button from "../ui/Button";

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

function CartItem({ item }) {
  return (
    <li className="flex items-center gap-4 py-4 sm:justify-between">
      <p className="line-clamp-1 basis-40 text-sm sm:flex-1 sm:text-base">
        {item.quantity}x {item.name}
      </p>

      <div className="flex flex-1 items-center justify-end gap-2 sm:flex-grow-0">
        <p className="text-sm font-semibold">&euro;{Number(item.unitPrice).toFixed(2)}</p>
        <Button type="small" style="px-4 py-1.5  sm:px-6 sm:py-2.5 text-xs font-sans">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartPage;

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unitPrice: PropTypes.number,
    totalPrice: PropTypes.number,
  }).isRequired,
};
