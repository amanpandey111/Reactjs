import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import Auth from "../pages/Auth"

const MainRouter = () => {
    const router = createBrowserRouter([
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/auth",
          element:<Auth/>
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default MainRouter