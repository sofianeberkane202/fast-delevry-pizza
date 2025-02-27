import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./ui/HomePage";
import MenuPage from "./features/Menu/MenuPage";
import CartPage from "./features/Cart/CartPage";

import OrderPage from "./features/Order/OrderPage";
import { loader as loaderOrder } from "./features/Order/OrderPage";

import CreateOrder from "./features/Order/CreateOrder";
import { action as formNewOrder } from "./features/Order/CreateOrder";

import AppLayout from "./ui/AppLayout";

import { loader as loaderMenu } from "./features/Menu/MenuPage";
// import Error from "./features/Order/Error";

/* eslint-disable react/react-in-jsx-scope */
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "menu",
          element: <MenuPage />,
          loader: loaderMenu,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "order/new",
          element: <CreateOrder />,
          action: formNewOrder,
          errorElement: <CreateOrder />,
        },
        {
          path: "order/:id",
          element: <OrderPage />,
          loader: loaderOrder,
        },
      ],
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "menu",
      element: <MenuPage />,
    },
    {
      path: "cart",
      element: <CartPage />,
    },
    {
      path: "order",
      element: <OrderPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
