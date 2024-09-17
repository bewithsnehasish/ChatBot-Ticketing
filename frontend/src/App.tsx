import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Landing2 from "./pages/Landing2";
import HomePage from "./pages/Homepage";
import TMSLandingPage from "./pages/Component";
import RenaissanceVisitSection from "./pages/Comp2";
import Comp3 from "./pages/Comp3";
import Landing4 from "./pages/Landing3";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing2 />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/comp",
        element: <TMSLandingPage />,
      },
      {
        path: "/comp2",
        element: <RenaissanceVisitSection />,
      },
      {
        path: "/comp3",
        element: <Comp3 />,
      },
      {
        path: "/comp4",
        element: <Landing4 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
