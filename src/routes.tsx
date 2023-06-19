import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Sources from "./pages/Sources";
import Models from "./pages/Models";
import Classic from "./pages/Classic";
import Modern from "./pages/Modern";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "/cripClassic",
    element: <Classic />,
  },
  {
    path: "/cripModern",
    element: <Modern />,
  },
  {
    path: "/fontes",
    element: <Sources />,
  },
  {
    path: "/modelos",
    element: <Models />,
  },
]);

export default function Routes() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
