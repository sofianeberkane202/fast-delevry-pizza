/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Button({ type, style, to, children }) {
  const base = `rounded-full bg-yellow-400
  text-base font-semibold uppercase text-stone-700 
  transition-colors duration-300 hover:bg-yellow-500`;

  const secondaryBase = `rounded-full bg-stone-50 text-stone-400 
  border-2 border-stone-200 px-6 py-2.5
  hover:bg-stone-200 hover:text-stone-700`;

  const linkBase = "font-mono font-medium text-blue-500/80";

  const buttonStyle = {
    primary: `${base} px-6 py-3`,
    small: `${base} ${style}`,
    link: `${linkBase} ${style}`,
    secondary: `${base} ${secondaryBase} ${style}`,
  };

  if (to)
    return (
      <Link to={to} className={buttonStyle[type]}>
        {children}
      </Link>
    );

  return <button className={buttonStyle[type]}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
