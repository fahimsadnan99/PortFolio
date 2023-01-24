import React from "react"
import {createBrowserRouter} from "react-router-dom"
import App from "./App"
import Home from "./pages/Home/Home"



const Route = createBrowserRouter ([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "*",
                element : <Home></Home> 
            }
        ]
    }
])


export default Route