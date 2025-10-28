import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ErrorPage from './pages/ErrorPage'
import ExplorePage from './pages/ExplorePage'
import ShopPage from './pages/ShopPage'
import ShareProduct from './pages/shareProduct'

const RouterHead = () => {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <MainPage/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "/view",
                    element: <ExplorePage/>
                },
                {
                    path: "/shop",
                    element: <ShopPage/>
                },
                {
                    path: '/share',
                    element: <ShareProduct/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={route} />
  )
}

export default RouterHead