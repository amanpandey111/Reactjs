import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "../app_layout/AppLayout"
import AllDetail from "../AllDetail.jsx"
import OneDetail from "../OneDetail.jsx"
import { individualDetail } from "../ui/IndividualDetail.jsx"
import UserProfile from "../ui/UserProfile.jsx"

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
                path:"/userdetail",
                element:<UserProfile/>
              },
              {
                path:"/:id",
                element:<OneDetail/>,
                loader:individualDetail
              }
            ]
        }
    ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default MainRoute