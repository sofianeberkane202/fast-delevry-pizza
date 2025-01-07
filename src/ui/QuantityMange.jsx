/* eslint-disable react/react-in-jsx-scope */
import Button from "../ui/Button";
import PropTypes from "prop-types";
function QuantityMange({ style, buttonStyle, quantity }) {
  // eslint-disable-next-line no-unused-vars
  const baseButton = "xs:text-sm flex items-center justify-center";

  return (
    <div className={`flex flex-row items-center sm:gap-2 ${style}`}>
      <Button type={"small"} style={`${baseButton} ${buttonStyle}`}>
        -
      </Button>
      <p className="px-2 text-[12px] font-semibold xs:text-sm sm:bg-transparent">{quantity}</p>
      <Button type={"small"} style={`${baseButton} ${buttonStyle}`}>
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
};
