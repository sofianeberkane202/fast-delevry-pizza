/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";

const fakeCart = [
  {
    pizzaId: 1,
    name: "Margherita Margherita",
    quantity: 1,
    unitPrice: 12,
    totalPrice: 12,
    ingredients: ["tomato", "mozzarella", "basil"],
  },
  {
    pizzaId: 2,
    name: "Romana",
    quantity: 3,
    unitPrice: 15,
    totalPrice: 45,
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
  },
  {
    pizzaId: 3,
    name: "Prosciutto e Rucola",
    quantity: 4,
    unitPrice: 16,
    totalPrice: 64,
    ingredients: ["tomato", "mozzarella", "ham", "mushrooms", "artichoke"],
  },
];

const fakeOrder = {
  id: "defr145dd",
  firstName: "sofiane berkane",
  phoneNumber: "072458964",
  address: "Tazmalt Bejaia Algerie",
  cart: fakeCart,
  priority: true,
};
function OrderPage() {
  const order = fakeOrder;
  return (
    <div className="mt-8 grid gap-6 sm:gap-8">
      <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row sm:gap-0">
        <h2 className="text-xl font-semibold">Order #{order.id} status</h2>
        <p className="flex items-center gap-2">
          {order.priority && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold uppercase text-stone-50">
              priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase text-stone-50">
            preparing order
          </span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-between gap-2 bg-stone-200 p-4 sm:flex-row sm:gap-0">
        <p className="font-semibold">Only 42 minutes left 😃</p>
        <p className="text-xs text-stone-500">(Estimated delivery: Jan 8, 04:58 PM)</p>
      </div>

      <ul className="divide-y-2 divide-stone-200">
        {order.cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>

      <div className="grid gap-2 bg-stone-200 px-6 py-4">
        <p className="text-sm font-semibold text-stone-500">Price pizza: &euro;27.00</p>
        <p className="text-sm font-semibold text-stone-500">Price priority: &euro;5.00</p>
        <p className="text-sm font-semibold">To pay delivery: &euro;27.00</p>
      </div>
    </div>
  );
}

function CartItem({ item }) {
  const { name, quantity, ingredients, unitPrice } = item;
  return (
    <li className="flex items-start justify-between py-2">
      <div className="grid gap-1">
        <p className="text-sm font-semibold">
          {quantity}x {name}
        </p>
        <p className="text-xs italic text-stone-500">
          {ingredients.map((ing) => ing.slice(0, 1).toUpperCase() + ing.slice(1)).join(", ")}
        </p>
      </div>
      <p className="text-sm font-bold">&euro;{Number(unitPrice).toFixed(2)}</p>
    </li>
  );
}

export default OrderPage;

CartItem.propTypes = {
  item: PropTypes.object,
};
