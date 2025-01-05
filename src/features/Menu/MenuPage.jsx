/* eslint-disable react/react-in-jsx-scope */
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getPizzas } from "../../services/servicesRestaurantApi";

function MenuPage() {
  const pizzas = useLoaderData();
  return (
    <ul className="container divide-y-[1.5px] divide-stone-200">
      {pizzas.map((pizza, i) => (
        <MenuItem key={i} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const data = await getPizzas();
  return data;
}

export default MenuPage;
