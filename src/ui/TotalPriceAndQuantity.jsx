/* eslint-disable react/react-in-jsx-scope */
function TotalPriceAndQuantity() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-6 py-4 text-stone-100">
      <div className="flex gap-4">
        <p className="font-mono font-semibold uppercase">1 pizzas</p>
        <p className="font-semibold">$16.00</p>
      </div>
      <button type="button">open cart &rarr;</button>
    </div>
  );
}

export default TotalPriceAndQuantity;
