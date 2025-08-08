import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Movies from '../pages/Movies'
import Contact from '../pages/Contact'

const MainAppRouter = () => {
  const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/movie",
                element:<Movies/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default MainAppRouter