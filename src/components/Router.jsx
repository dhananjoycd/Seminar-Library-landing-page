import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Search from "./Search";
import Home from "./Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "*",
        element: <div>Page Not Found</div>,
      },
    ],
  },
]);

export default Router;
