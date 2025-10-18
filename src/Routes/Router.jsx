import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Error from "../components/Error/Error";

const router = createBrowserRouter([ 
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [ 
            {
                path: '/',
                Component: Home
            },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
            },
            {
                path: '/*',
                Component: Error
            }
        ]
        
    }
])
export default router;  