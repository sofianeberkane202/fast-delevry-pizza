/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import Button from "../ui/Button";

// const fakeDataMenu = [
//   {
//     id: 1,
//     name: "Margherita",
//     unitPrice: 12,
//     imageUrl: "/images/pizza-1.jpg",
//     ingredients: ["tomato", "mozzarella", "basil"],
//     soldOut: false,
//   },
//   {
//     id: 2,
//     name: "Capricciosa",
//     unitPrice: 14,
//     imageUrl: "/images/pizza-2.jpg",
//     ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
//     soldOut: true,
//   },
//   {
//     id: 3,
//     name: "Romana",
//     unitPrice: 15,
//     imageUrl: "/images/pizza-3.jpg",
//     ingredients: ["tomato", "mozzarella", "prosciutto"],
//     soldOut: false,
//   },
//   {
//     id: 4,
//     name: "Prosciutto e Rucola",
//     unitPrice: 16,
//     imageUrl: "/images/pizza-4.jpg",
//     ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
//     soldOut: false,
//   },
// ];

function MenuPage() {
  const pizzas = useLoaderData();
  return (
    <ul className="divide-y-[1.5px] divide-stone-200 px-6 py-2">
      {pizzas.map((pizza, i) => (
        <MenuItem key={i} pizza={pizza} />
      ))}
    </ul>
  );
}

function MenuItem({ pizza }) {
  return (
    <li className="container flex items-center justify-between py-2">
      <div className="flex gap-4">
        <img className="h-24 w-24" src={pizza.imageUrl} alt={pizza.name} />

        <div className="grid grid-rows-[auto_auto_1fr]">
          <p className="text-normal pb-2 font-semibold capitalize">{pizza.name}</p>

          <p className="text-sm italic text-stone-500">
            {pizza.ingredients.map((ing) => ing.slice(0, 1).toUpperCase() + ing.slice(1)).join(", ")}
          </p>

          <p className="flex items-end">&euro;{Number(pizza.unitPrice).toFixed(2)}</p>
        </div>
      </div>

      <Button type="primary">Add to cart</Button>
    </li>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8000/data");
  if (!response.ok) throw new Error("Faild to fetch data!");
  const data = response.json();
  return data;
}

export default MenuPage;

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
