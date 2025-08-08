import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import AppLayout from "../app_layout/AppLayout"
import Create from "../components/Create"
import Read from "../components/Read"
import Update from "../components/Update"

const MainRouter = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Create/>
                },
                {
                    path:"/read",
                    element:<Read/>
                },
                {
                    path:"/edit/:id",
                    element:<Update/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default MainRouter