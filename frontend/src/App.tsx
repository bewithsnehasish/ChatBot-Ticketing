import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Landing2 from "./pages/Landing2";
import Component from "./pages/comp2";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing2 />,
      },
      {
        path: "/about",
        element: <Component />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
