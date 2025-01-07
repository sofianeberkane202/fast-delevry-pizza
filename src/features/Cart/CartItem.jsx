/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import QuantityMange from "../../ui/QuantityMange";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "./reducerCartSlice";

function CartItem({ item }) {
  const { pizzaId, name, unitPrice, quantity } = item;

  const dispatch = useDispatch();

  function handleDeleteCartItem() {
    dispatch(deleteCartItem(pizzaId));
  }
  return (
    <li className="flex items-center gap-4 py-4 sm:justify-between">
      <p className="line-clamp-1 basis-40 text-[12px] xs:flex-1 xs:text-sm sm:text-base">
        {quantity}x {name}
      </p>

      <div className="flex flex-1 items-center justify-end gap-3 sm:flex-grow-0 sm:gap-6">
        <p className="text-[12px] font-semibold xs:text-sm">&euro;{Number(unitPrice).toFixed(2)}</p>
        {/* " xs:text-sm rounded-none sm:rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"; */}
        <QuantityMange
          pizzaId={pizzaId}
          quantity={quantity}
          buttonStyle={"text-[12px] rounded-none xs:rounded-full w-6 h-6 xs:h-8 xs:w-8 "}
        />

        <Button
          handleState={handleDeleteCartItem}
          type="small"
          style="px-4 py-1.5 sm:px-6 sm:py-2.5 sm:text-xs hidden sm:inline-block"
        >
          Delete
        </Button>

        <Button
          type={"small"}
          style={"h-5 w-5 bg-transparent px-0 py-0 hover:bg-transparent"}
          handleState={handleDeleteCartItem}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#d97706"
            className="bi bi-trash h-full w-full"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </Button>
      </div>
    </li>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unitPrice: PropTypes.number,
    totalPrice: PropTypes.number,
  }).isRequired,
};
