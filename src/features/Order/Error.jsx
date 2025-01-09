/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
const Error = ({ message, status }) => {
  if (status === 400) {
    return <p className="mt-2 rounded-sm bg-red-100 p-2 text-xs text-red-800">{message}</p>;
  }

  if (status === 500) {
    return <p className="mt-2 rounded-sm bg-red-100 p-2 text-xs text-red-800">{message}</p>;
  }

  return <p className="mt-2 rounded-sm bg-red-100 p-2 text-xs text-red-800">{message}</p>;
};

Error.propTypes = {
  status: PropTypes.number,
  message: PropTypes.string,
};

export default Error;
