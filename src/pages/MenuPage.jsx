/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
const fakeDataMenu = [
  {
    id: 1,
    name: "Margherita",
    unitPrice: 12,
    imageUrl: "/images/pizza-1.jpg",
    ingredients: ["tomato", "mozzarella", "basil"],
    soldOut: false,
  },
  {
    id: 2,
    name: "Capricciosa",
    unitPrice: 14,
    imageUrl: "/images/pizza-2.jpg",
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
    soldOut: true,
  },
  {
    id: 3,
    name: "Romana",
    unitPrice: 15,
    imageUrl: "/images/pizza-3.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto"],
    soldOut: false,
  },
  {
    id: 4,
    name: "Prosciutto e Rucola",
    unitPrice: 16,
    imageUrl: "/images/pizza-4.jpg",
    ingredients: ["tomato", "mozzarella", "prosciutto", "arugula"],
    soldOut: false,
  },
];

function MenuPage() {
  return <MenuItem />;
}

function MenuItem() {
  const pizza = fakeDataMenu[0];
  return (
    <div className="mx-auto flex w-full max-w-[800px] items-center gap-4 bg-red-400 px-6 py-2">
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
    </div>
  );
}

function Ingredient({ ing }) {
  return <li>{ing}</li>;
}

export default MenuPage;

Ingredient.propTypes = {
  ing: PropTypes.string,
};
