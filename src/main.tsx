import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";

import "./shared/styles/app.css";

import Home from "./routes/home";
import RootLayout from "./shared/layouts/root-layout";
import About from "./routes/about";
import Tabling from "./routes/tabling";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: Home,
  },
  {
    Component: RootLayout,
    children: [
      { path: "about", Component: About },
      { path: "tabling", Component: Tabling },
    ],
  },
]);

const root = document.body;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
