import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import AppLayout from "./ui/AppLayout";

import { loader as loaderMenu } from "./pages/MenuPage";

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
          path: "order",
          element: <OrderPage />,
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
