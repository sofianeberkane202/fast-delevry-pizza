/* eslint-disable react/react-in-jsx-scope */

import { useNavigate } from "react-router-dom";

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
      <div className="absolute left-1/2 top-16 w-[80%] -translate-x-1/2">
        <h1 className="mb-8 font-mono text-3xl font-semibold tracking-wide">
          <span>The best pizza.</span>
          <br />
          <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
        </h1>
        <p className="mb-4 tracking-widest">👋 Welcome! Please start by telling us your name:</p>
        <form className="flex flex-col items-center gap-4" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Your full name" className="w-72 rounded-full px-4 py-3 text-sm" />
          <button>start ordering</button>
        </form>
      </div>
    </main>
  );
}

export default HomePage;
