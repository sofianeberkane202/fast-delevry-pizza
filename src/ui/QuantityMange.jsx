/* eslint-disable react/react-in-jsx-scope */
import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import PropTypes from "prop-types";
import { decreaseQuantity, increaseQuantity } from "../features/Cart/reducerCartSlice";

function QuantityMange({ style, buttonStyle, quantity, pizzaId }) {
  const dispatch = useDispatch();
  const baseButton = "xs:text-sm flex items-center justify-center";

  function handleDecreaseQuantity() {
    dispatch(decreaseQuantity(pizzaId));
  }

  function handleIncreaseQuantity() {
    dispatch(increaseQuantity(pizzaId));
  }

  return (
    <div className={`flex flex-row items-center sm:gap-2 ${style}`}>
      <Button handleState={handleDecreaseQuantity} type={"small"} style={`${baseButton} ${buttonStyle}`}>
        -
      </Button>
      <p className="px-2 text-[12px] font-semibold xs:text-sm sm:bg-transparent">{quantity}</p>
      <Button handleState={handleIncreaseQuantity} type={"small"} style={`${baseButton} ${buttonStyle}`}>
        +
      </Button>
    </div>
  );
}

export default QuantityMange;

QuantityMange.propTypes = {
  style: PropTypes.string,
  buttonStyle: PropTypes.string,
  quantity: PropTypes.number,
  pizzaId: PropTypes.number,
};
