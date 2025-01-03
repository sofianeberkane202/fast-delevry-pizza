/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

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
    <ul>
      {pizzas.map((pizza, i) => (
        <MenuItem key={i} pizza={pizza} />
      ))}
    </ul>
  );
}

function MenuItem({ pizza }) {
  return (
    <li className="mx-auto flex w-full max-w-[800px] items-center gap-4 px-6 py-2">
      <img className="w-24" src={pizza.imageUrl} alt={pizza.name} />
      <div>
        <p>{pizza.name}</p>
        <ul className="flex items-center gap-2">
          {pizza.ingredients.map((ing, i) => (
            <Ingredient key={i} ing={ing} />
          ))}
        </ul>
        <p>&euro;{pizza.unitPrice}</p>
      </div>
    </li>
  );
}

function Ingredient({ ing }) {
  return <li>{ing}</li>;
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

Ingredient.propTypes = {
  ing: PropTypes.string,
};
