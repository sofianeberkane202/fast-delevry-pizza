/* eslint-disable react/react-in-jsx-scope */

import CreateUser from "../features/User/CreateUser";

function HomePage() {
  return <Content />;
}

function Content() {
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
        <CreateUser />
      </div>
    </main>
  );
}

export default HomePage;
