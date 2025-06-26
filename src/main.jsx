import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Errorpage from './components/ErrorPage/Errorpage.jsx';
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact.jsx";


const router = new createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
      
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
