import { createBrowserRouter, } from "react-router-dom";
import Root from "../Layouts/Root";
import { Children } from "react";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root> ,
        Children:[
            {
                path: "/",
                element: <Home></Home> ,
            },
        ]
    },
    
]);
export default router;