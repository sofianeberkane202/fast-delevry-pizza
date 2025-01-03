import { Link } from "react-router-dom";

/* eslint-disable react/react-in-jsx-scope */
function NavBar() {
  return (
    <div className="flex flex-col items-center justify-between gap-2 bg-yellow-400 px-6 py-4 sm:flex-row">
      <p className="font-mono font-normal uppercase sm:text-lg sm:tracking-widest">
        <Link to={"/"}>fast react pizza co.</Link>
      </p>
      <form>
        <input
          className="w-60 rounded-full bg-yellow-100 px-4 py-2 font-mono text-sm transition-all duration-300 focus:w-72 focus:border-none focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-400"
          type="text"
          placeholder="Search Order #"
        />
      </form>
      <p className="font-mono text-sm font-medium uppercase tracking-wide">sofiane</p>
    </div>
  );
}

export default NavBar;
