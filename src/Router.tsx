import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ReportPage from "./ReportPage";

const root = createBrowserRouter([
  { path: "/", element: <App /> },

  { path: "/reports", element: <ReportPage /> },
  { path: "*", element: "Not Found, Sorry Try Again" },
]);

const Router = () => {
  return <RouterProvider router={root} />;
};

export default Router;
