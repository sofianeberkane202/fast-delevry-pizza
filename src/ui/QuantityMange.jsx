/* eslint-disable react/react-in-jsx-scope */
import useCartActions from "../features/Cart/useCartActions";
import Button from "../ui/Button";
import PropTypes from "prop-types";

function QuantityMange({ style, buttonStyle, quantity, pizzaId }) {
  const baseButton = "xs:text-sm flex items-center justify-center";

  const { handleDecreaseQuantity, handleIncreaseQuantity } = useCartActions({ id: pizzaId });

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
