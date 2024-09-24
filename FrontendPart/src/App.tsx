import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import Virtual from "./pages/Virtual";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/virtual",
        element: <Virtual />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
