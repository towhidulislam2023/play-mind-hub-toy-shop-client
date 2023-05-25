import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home/Home";
import Layout from "../Layouts/Layout";
import Login from "../pages/Login/Login";
import Registar from "../pages/Registar/Registar";
import ViewProductDetails from "../pages/ViewProductDetails/ViewProductDetails";
import PrivateRoute from "./PrivateRoute";
import Alltoys from "../pages/Alltoys/Alltoys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/Mytoys/MyToys";
import UpdateaData from "../pages/updateData/UpdateaData";
import ErrorPage from "../Sheared/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/signup",
                element:<Registar></Registar>
            },
            {
                path:"/viewProductDetails/:id",
                element: <PrivateRoute><ViewProductDetails></ViewProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://play-minds-server.vercel.app/viewdetails/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/alltoys",
                element: <Alltoys></Alltoys>,
                errorElement: <ErrorPage></ErrorPage>,
            },
           
            {
                path: "/addtoy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/mytoys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: "/updatetoys/:id",
                element: <PrivateRoute><UpdateaData></UpdateaData></PrivateRoute>,
                loader: ({ params }) => fetch(`https://play-minds-server.vercel.app/viewdetails/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            }
           
        ]
    },
    {
        path:"/*",
        element:<ErrorPage></ErrorPage>
    }
]);
export default router