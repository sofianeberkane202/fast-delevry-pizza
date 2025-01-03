/* eslint-disable react/react-in-jsx-scope */

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import TotalPriceAndQuantity from "./TotalPriceAndQuantity";
function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100">
      <NavBar />

      <div className="overflow-y-auto">
        <Outlet />
      </div>

      <TotalPriceAndQuantity />
    </div>
  );
}

export default AppLayout;
