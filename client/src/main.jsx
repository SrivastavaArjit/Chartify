import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/home";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/about";
import NotFoundPage from "./pages/NotFoundPage/notfoundpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar/sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sidebar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
