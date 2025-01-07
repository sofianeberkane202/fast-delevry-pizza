/* eslint-disable react/react-in-jsx-scope */

import { useNavigate } from "react-router-dom";
import Button from "./Button";
function HomePage() {
  return <Content />;
}

function Content() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate("/menu");
  }
  return (
    <main className="relative text-center">
      <div className="absolute left-1/2 top-10 w-[80%] -translate-x-1/2 sm:top-16">
        <h1 className="mb-4 font-mono text-xl font-semibold tracking-wide sm:mb-8 sm:text-3xl">
          <span>The best pizza.</span>
          <br />
          <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
        </h1>
        <p className="mb-4 text-sm sm:text-base sm:tracking-widest">
          👋 Welcome! Please start by telling us your name:
        </p>
        <form className="flex flex-col items-center gap-4" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Your full name" className="w-72 rounded-full px-4 py-3 text-sm" />

          <Button type={"primary"}>start ordering</Button>
        </form>
      </div>
    </main>
  );
}

export default HomePage;
