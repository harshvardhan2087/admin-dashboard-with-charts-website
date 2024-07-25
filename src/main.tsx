import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.tsx';
import Users from './pages/users/Users.tsx';
import Products from './pages/products/Products.tsx';
import { Layout } from './App.tsx';
import Login from './pages/login/Login.tsx';
import User from './pages/user/User.tsx';
import Product from './pages/product/Product.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
    ],
    
  },
  {
    path: '/login',
    element: <Login />,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
