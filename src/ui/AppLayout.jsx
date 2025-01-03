/* eslint-disable react/react-in-jsx-scope */

import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import TotalPriceAndQuantity from "./TotalPriceAndQuantity";
import Loader from "./Loader";
function AppLayout() {
  const { state } = useNavigation();

  return (
    <div className="relative grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100">
      <NavBar />
      {state === "loading" && <Loader />}
      <div className="overflow-y-auto">{state === "idle" && <Outlet />}</div>

      <TotalPriceAndQuantity />
    </div>
  );
}

export default AppLayout;
