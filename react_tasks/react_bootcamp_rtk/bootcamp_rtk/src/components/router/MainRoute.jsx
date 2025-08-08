import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../app_layout/AppLayout";
import AllDetail from "../AllDetail";
import OneDetail from "../OneDetail";
import UserProfile from "../ui/UserProfile";

const MainRoute = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<AllDetail/>
        },
        {
          path:"/:id",
          element:<OneDetail/>
        },
        {
          path:"/userdetail",
          element:<UserProfile/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
                              
export default MainRoute      