import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../page/Home";
import Login from "../page/Authentication/Login";
import Register from "../page/Authentication/Register";
import JobDetails from "../page/JobDetails";
import AddJob from "../page/AddJob";
import ErrorPage from "../page/ErrorPage";
import MyPostedJob from "../page/MyPostedJob";
import UpdateJob from "../page/UpdateJob";
import PrivateRoute from "./private/PrivateRoute";
import MyBids from "../page/MyBids";
import BidRequests from "../page/BidRequests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "/addjob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/mypostedjob",
        element: (
          <PrivateRoute>
            <MyPostedJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/mybids",
        element: (
          <PrivateRoute>   
            <MyBids />
          </PrivateRoute>
        ),
      },
      {
        path: "/bidrequest",
        element: (
          <PrivateRoute>   
            <BidRequests />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/registration",
        element: <Register />,
      },
    ],
  },
]);

export default router;
