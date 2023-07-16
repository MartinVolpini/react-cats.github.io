import { createHashRouter , HashRouter, createBrowserRouter} from "react-router-dom";

//Pages....

import { ViewPaginacion } from "../m_pages/cats/views/ViewPaginacion"
import { ViewLogin } from "../m_pages/login/views/ViewLogin";

import { ViewPictures } from '../m_pages/pictures/views/ViewPictures';

//Validacion de rutas...
import { ProtectedRoute } from "./ProtectedRoute";




export const router = createBrowserRouter([
    {
        path: "/",
        element:                                //Esta anidacion es para validar si esta login
        <ProtectedRoute>  
            <ViewPaginacion />
        </ProtectedRoute>,
        errorElement: <h1>404 Not Found!</h1>,
        // lazy: () => import("") ,
        // loader: () => <h1>Loading....</h1>
    },
    {
        path: "/login",
        element: <ViewLogin />
    },
    {
        path: "/cat",
        element: <ViewPaginacion />
    },
    {
        path: "/pictures",
        element: <ViewPictures />  
    }
]
);