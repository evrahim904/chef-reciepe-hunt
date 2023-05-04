import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Header from "../Components/Header";
import Recipes from "../Home/Recipes";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path:'/',
    element: <Header></Header>,
    
    children:[
        {
        path:'/',
        element:<Main></Main>
        },
        {

            path:'/info/:id',
            element:<PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
            loader:({params}) =>fetch(`http://localhost:5000/data/${params.id}`)
            
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        }
    ]
}])

export default router;
