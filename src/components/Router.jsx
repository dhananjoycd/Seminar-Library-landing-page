import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Search from "./Search";

const searchDataLoader = async () => {
  const res = await fetch("/searchBookData.JSON");
  if (!res.ok) {
    throw new Error("Failed to load book data");
  }
  const data = await res.json();
  return data;
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <Search />,
    loader: searchDataLoader,
  },
]);

export default Router;
