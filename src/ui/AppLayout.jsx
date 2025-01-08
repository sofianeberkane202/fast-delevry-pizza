/* eslint-disable react/react-in-jsx-scope */

import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import TotalPriceAndQuantity from "./TotalPriceAndQuantity";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { getName } from "../features/User/reducerUserSlice";
function AppLayout() {
  const { state } = useNavigation();
  const name = useSelector((state) => getName(state));

  return (
    <div className="relative grid h-screen grid-rows-[auto_1fr_auto] bg-stone-100">
      <NavBar />
      {state === "loading" && <Loader />}
      <div className="container overflow-y-auto">{state === "idle" && <Outlet />}</div>

      {name && <TotalPriceAndQuantity />}
    </div>
  );
}

export default AppLayout;
