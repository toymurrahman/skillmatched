import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home";
import Login from "../page/Authentication/Login";
import Register from "../page/Authentication/Register";
import JobDetails from "../page/JobDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {

          path: "/login",
          element: <Login />,
        },
        {

          path: "/job/:id",
          element: <JobDetails />,
          loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
        },
        {
          path: "/registration",
          element: <Register />,
        }
      ]
    },
  ]);

export default router;