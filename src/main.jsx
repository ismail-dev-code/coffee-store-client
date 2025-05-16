import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Users from "./components/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffee-server-silk.vercel.app/coffees"),
        hydrateFallbackElement: <p>Loading..</p>,
        element: <Home></Home>,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-server-silk.vercel.app/coffees/${params.id}`),
        hydrateFallbackElement: <p>Loading....</p>,
        element: <CoffeeDetails></CoffeeDetails>,
      },
      {
        path: "/update-coffee/:id",
        hydrateFallbackElement: <p>Loading....</p>,
        loader: ({ params }) =>
        fetch(`https://coffee-server-silk.vercel.app/coffees/${params.id}`),
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        hydrateFallbackElement: <p>Loading....</p>,
        loader: () => fetch("https://coffee-server-silk.vercel.app/users"),
        element: <Users></Users>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
