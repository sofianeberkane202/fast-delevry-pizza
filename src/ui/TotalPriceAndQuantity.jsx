import { Link } from "react-router-dom";

/* eslint-disable react/react-in-jsx-scope */
function TotalPriceAndQuantity() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-6 py-4 font-mono font-medium uppercase text-stone-100">
      <div className="flex gap-4">
        <p>1 pizzas</p>
        <p>$16.00</p>
      </div>
      <Link to={"/cart"}> open cart &rarr; </Link>
    </div>
  );
}

export default TotalPriceAndQuantity;
