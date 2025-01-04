import Button from "../ui/Button";

/* eslint-disable react/react-in-jsx-scope */
function OrderPage() {
  return (
    <div className="mt:3 py-2 sm:mt-4">
      <h1 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">Ready to order? Let&apos;s go!</h1>
      <form className="grid gap-3 sm:gap-6">
        <div className="flex items-center justify-between">
          <label className="hidden basis-40 capitalize sm:inline-block" htmlFor="name">
            first name
          </label>
          <input
            placeholder="first name"
            className="input py-2 placeholder:text-xs placeholder:capitalize sm:placeholder:opacity-0"
            type="text"
            name="firstName"
            id="name"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="hidden basis-40 capitalize sm:inline-block" htmlFor="phone">
            phone number
          </label>
          <input
            placeholder="phone number"
            className="input py-2 placeholder:text-xs placeholder:capitalize sm:placeholder:opacity-0"
            type="tel"
            name="phoneNumber"
            id="phone"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="hidden basis-40 capitalize sm:inline-block" htmlFor="address">
            address
          </label>
          <input
            placeholder="address"
            className="input py-2 placeholder:text-xs placeholder:capitalize sm:placeholder:opacity-0"
            type="text"
            name="address"
            id="address"
          />
        </div>

        <label htmlFor="priority" className="mt-4 flex items-center gap-2 sm:gap-4">
          <input
            className="h-4 w-4 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 sm:h-6 sm:w-6"
            type="checkbox"
            name="priority"
            id="priority"
          />
          <span className="text-sm sm:text-base">Want to yo give your order priority?</span>
        </label>

        <div className="mt-4 sm:mt-6">
          <Button type={"primary"}>order now for &euro;32.40</Button>
        </div>
      </form>
    </div>
  );
}

export default OrderPage;
