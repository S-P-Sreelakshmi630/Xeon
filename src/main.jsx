import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Connect from "./components/Connect.jsx";
import Mybanks from "./components/Mybanks.jsx";
import Transaction from "./components/Transaction.jsx";
import Payments from "./components/Payment.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authorize from "./components/Authorize/Authorize.jsx";

const routerVariable = createBrowserRouter([
  {
    path: "/",
    element: <Authorize/>,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/mybank",
    element: <Mybanks />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/payment",
    element: <Payments />,
  },
  {
    path: "/connect",
    element: <Connect />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerVariable} />
  </React.StrictMode>
);
