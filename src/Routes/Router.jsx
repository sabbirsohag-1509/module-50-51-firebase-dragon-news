import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Error from "../components/Error/Error";
import AuthenticationLayout from "../pages/AuthenticationLayout/AuthenticationLayout";
import Registration from "../pages/Registration/Registration";
import LogIn from "../pages/LogIn/LogIn";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/registration",
        Component: Registration,
      },
      {
        path: "/auth/login",
        Component: LogIn,
      },
    ],
  },

  {
    path: "/newsDetails/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/*",
    Component: Error,
  },
]);
export default router;
