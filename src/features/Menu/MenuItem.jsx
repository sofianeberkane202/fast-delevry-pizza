/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import QuantityMange from "../../ui/QuantityMange";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import useCartActions from "../Cart/useCartActions";
import { getQuantity } from "../Cart/reducerCartSlice";
function MenuItem({ pizza }) {
  const item = useSelector((state) => getQuantity(state, +pizza.id));

  const { handleAddItemToCart, handleDeleteCartItem } = useCartActions({ newItem: pizza, id: +pizza.id });

  return (
    <li className="flex items-center justify-between py-2 sm:container">
      <div className="flex w-full gap-2 sm:gap-4">
        <div className="flex w-24 flex-wrap content-between gap-2">
          <img className="w-full" src={pizza.imageUrl} alt={pizza.name} />
          <div className="flex h-8 w-full xs:hidden">
            {item?.quantity && (
              <QuantityMange
                pizzaId={+pizza.id}
                quantity={item?.quantity}
                style={"justify-between w-full"}
                buttonStyle={"rounded w-8 h-8 text-sm"}
              />
            )}
          </div>
        </div>

        <div className="grid flex-1 grid-rows-[auto_auto_1fr] gap-2 sm:gap-0">
          <p className="text-normal font-semibold capitalize sm:pb-2">{pizza.name}</p>

          <p className="line-clamp-3 text-xs italic text-stone-500 sm:text-sm">
            {pizza.ingredients.map((ing) => ing.slice(0, 1).toUpperCase() + ing.slice(1)).join(", ")}
          </p>

          <div className="flex flex-col justify-between gap-1 xs:flex-row xs:items-center">
            <p className="flex items-end font-bold">&euro;{Number(pizza.unitPrice).toFixed(2)}</p>
            <div className="flex items-center gap-2">
              <div className="hidden xs:block">
                {item?.quantity && (
                  <QuantityMange
                    pizzaId={+pizza.id}
                    quantity={item?.quantity}
                    buttonStyle={"rounded w-8 h-8 text-sm"}
                  />
                )}
              </div>
              <div>
                {!item?.quantity ? (
                  <Button handleState={handleAddItemToCart} type="small" style={"py-2 px-4 sm:py-3 md:px-6"}>
                    Add to cart
                  </Button>
                ) : (
                  <Button handleState={handleDeleteCartItem} type="small" style={"py-2 px-4 sm:py-3 md:px-6"}>
                    delete
                  </Button>
                )}
              </div>
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
    id: PropTypes.string,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    imageUrl: PropTypes.string,
    ingredients: PropTypes.array,
    soldOut: PropTypes.bool,
  }).isRequired,
};
