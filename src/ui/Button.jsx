/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
function Button({ children }) {
  return (
    <button className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase text-stone-700 transition-colors duration-300 hover:bg-yellow-500">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
};

export default Button;
