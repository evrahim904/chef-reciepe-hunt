import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Header from "../Components/Header";
import Recipes from "../Home/Recipes";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Components/ErrorPage";
import Blog from "../Components/Blog";


const router = createBrowserRouter([
    {
        path:'/',
    element: <Header></Header>,
    errorElement:<ErrorPage></ErrorPage>,
    
    children:[
        {
        path:'/',
        element:<Main></Main>
        },
        {

            path:'/info/:id',
            element:<Recipes></Recipes>,
            loader:({params}) =>fetch(`https://chef-recepie-server-evrahim904.vercel.app/data/${params.id}`)
            
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
    ]
}])

export default router;
