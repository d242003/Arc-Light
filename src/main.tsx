import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./routes/home";
import EasyMedHard from "./routes/easy-med-hard";
import Dashboard from "./routes/dashboard";
import Languages from "./routes/languages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/setup",
        element: <EasyMedHard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/languages",
        element: <Languages />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
