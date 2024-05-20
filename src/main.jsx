import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import "./index.css";

import Layout from "/src/layout/Layout";
import Hero from "./component/Hero";
import ProductDetails from "./component/ProductDetails";
import { CartProvider } from "./context/CartProvider";
import Header from "./layout/Header";

const router = createBrowserRouter([
  {
    path: "/",
    
    element: <div>
      <Header />
      <Layout />
    </div>,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}>
        <Routes />
      </RouterProvider>
    </CartProvider>
  </React.StrictMode>
);
