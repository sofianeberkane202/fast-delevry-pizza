/* eslint-disable react/react-in-jsx-scope */
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

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
  const response = await fetch("http://localhost:8000/data");
  if (!response.ok) throw new Error("Faild to fetch data!");
  const data = response.json();
  return data;
}

export default MenuPage;
