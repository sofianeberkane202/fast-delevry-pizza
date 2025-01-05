/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";

import Button from "../ui/Button";
import QuantityMange from "../ui/QuantityMange";

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
      <p className="xs:text-sm xs:flex-1 line-clamp-1 basis-40 text-[12px] sm:text-base">
        {item.quantity}x {item.name}
      </p>

      <div className="flex flex-1 items-center justify-end gap-3 sm:flex-grow-0 sm:gap-6">
        <p className="xs:text-sm text-[12px] font-semibold">&euro;{Number(item.unitPrice).toFixed(2)}</p>

        <QuantityMange />

        <Button type="small" style="px-4 py-1.5 sm:px-6 sm:py-2.5 sm:text-xs hidden sm:inline-block">
          Delete
        </Button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#d97706"
          className="bi bi-trash h-5 w-5 cursor-pointer sm:hidden"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
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
