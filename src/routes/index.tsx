import { createBrowserRouter } from "react-router-dom";
import AllBooks from "../page/AllBooks";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import SignIn from "../page/SignIn";
import SignUp from "../page/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-books",
    element: <AllBooks />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
