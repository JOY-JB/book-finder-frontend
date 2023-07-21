import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNewBook from "../page/AddNewBook";
import AllBooks from "../page/AllBooks";
import BookDetails from "../page/BookDetails";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import SignIn from "../page/SignIn";
import SignUp from "../page/SignUp";
import UpdateBook from "../page/UpdateBook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
        path: "/add-new-book",
        element: <AddNewBook />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
      {
        path: "/book/update-book/:id",
        element: <UpdateBook />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
