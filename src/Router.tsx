import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import ReportPage from "./ReportPage";
import SensorPage from "./SensorPage";
import Intro from "./Intro";

const root = createBrowserRouter([
  { path: "/sensorpage", element: <SensorPage /> },
  { path: "/", element: <Intro /> },

  { path: "/reports", element: <ReportPage /> },
  { path: "*", element: "Not Found, Sorry Try Again" },
]);

const Router = () => {
  return <RouterProvider router={root} />;
};

export default Router;
