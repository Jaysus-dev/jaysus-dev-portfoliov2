import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import App from "./App.jsx";
import Profile from "./components/Main/Profile/Profile.jsx";
import Expertise from "./components/Main/Expertise/Expertise.jsx";
import Portfolio from "./components/Main/Portfolio/Portfolio.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <ScrollRestoration />*/}
        <App />
      </>
    ),
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "expertise",
        element: <Expertise />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
