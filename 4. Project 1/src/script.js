import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import ErrorPage from "./component/ErrorPage.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./component/Cart.js";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <React.Fragment>
        <Header />
        <Outlet />
      </React.Fragment>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
