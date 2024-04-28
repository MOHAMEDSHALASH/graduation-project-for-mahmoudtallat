import React from 'react';
import './index.css';



import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import OilProducts from './pages/ProductsPages/OilProducts';
import HoneyProducts from './pages/ProductsPages/HoneyProducts';
import HerbalProducts from './pages/ProductsPages/HerbalProducts';
import Cart from './pages/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/singleProduct/:id1/:id2",
    element: <SingleProduct />,
  },
  {
    path: "/honeyproducts",
    element: <HoneyProducts />,
  },
  {
    path: "/oilproducts",
    element: <OilProducts />,
  },
  {
    path: "/herbalproducts",
    element: <HerbalProducts />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

