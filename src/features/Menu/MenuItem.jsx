/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import QuantityMange from "../../ui/QuantityMange";
import Button from "../../ui/Button";
function MenuItem({ pizza }) {
  return (
    <li className="flex items-center justify-between py-2 sm:container">
      <div className="flex w-full gap-2 sm:gap-4">
        <div className="flex w-24 flex-wrap content-between gap-2">
          <img className="w-full" src={pizza.imageUrl} alt={pizza.name} />
          <div className="xs:hidden flex h-8 w-full">
            <QuantityMange style={"justify-between w-full"} buttonStyle={"rounded w-8 h-8 text-sm"} />
          </div>
        </div>

        <div className="grid flex-1 grid-rows-[auto_auto_1fr] gap-2 sm:gap-0">
          <p className="text-normal font-semibold capitalize sm:pb-2">{pizza.name}</p>

          <p className="line-clamp-3 text-xs italic text-stone-500 sm:text-sm">
            {pizza.ingredients.map((ing) => ing.slice(0, 1).toUpperCase() + ing.slice(1)).join(", ")}
          </p>

          <div className="xs:flex-row xs:items-center flex flex-col justify-between gap-1">
            <p className="flex items-end font-bold">&euro;{Number(pizza.unitPrice).toFixed(2)}</p>
            <div className="flex items-center gap-2">
              <div className="xs:block hidden">
                <QuantityMange buttonStyle={"rounded w-8 h-8 text-sm"} />
              </div>
              <Button type="small" style={"py-2 px-4 sm:py-3 md:px-6"}>
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    imageUrl: PropTypes.string,
    ingredients: PropTypes.array,
    soldOut: PropTypes.bool,
  }).isRequired,
};
