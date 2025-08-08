import { RouterProvider,createBrowserRouter } from "react-router-dom"
import AppLayout from "../components/AppLayout"
import Main from "../components/Main"
import Cart from "../components/Cart"

const MainRouter = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Main/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                }
            ]
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default MainRouter