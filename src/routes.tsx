import React from 'react';

import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Sources from './pages/Sources';
import AboutUs from './pages/AboutUs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Home/>,    
    },
    {
        path: "/fontes",
        element: <Sources/>
    },
    {
        path: "/sobre-nos",
        element: <AboutUs/>
    }
])

export default function Routes(){
    return(
        <div>
            <RouterProvider router={router} />
        </div>
    )
}