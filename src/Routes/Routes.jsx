import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Header from "../Components/Header";
import Recipes from "../Home/Recipes";


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
            element:<Recipes></Recipes>,
            loader:({params}) =>fetch(`http://localhost:5000/data/${params.id}`)
            
        }
    ]
}])

export default router;
