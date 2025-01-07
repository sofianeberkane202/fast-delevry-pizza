import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBillOfTotalPrice, getNumberOfPizzasAdded } from "../features/Cart/reducerCartSlice";

/* eslint-disable react/react-in-jsx-scope */
function TotalPriceAndQuantity() {
  const numberOfPizzas = useSelector((state) => getNumberOfPizzasAdded(state));
  const bill = useSelector((state) => getBillOfTotalPrice(state));
  return (
    <div className="flex items-center justify-between bg-stone-800 px-6 py-4 font-mono font-medium uppercase text-stone-100">
      <div className="flex gap-4 text-sm sm:text-base">
        <p>{numberOfPizzas} pizzas</p>
        <p>${Number(bill).toFixed(2)}</p>
      </div>
      <Link to={"/cart"} className="text-sm sm:text-base">
        open cart &rarr;
      </Link>
    </div>
  );
}

export default TotalPriceAndQuantity;
