import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import AppLayout from "../app_layout/AppLayout"
import AppLayout from "../app_layout/AppLayout.js"
// import AllDetail from "../AllDetail.jsx"
import AllDetail from "../AllDetail.js"
// import OneDetail from "../OneDetail.jsx"
import OneDetail from "../OneDetail.js"
// import { individualDetail } from "../ui/IndividualDetail.jsx"
import { individualDetail } from "../ui/IndividualDetail.js"
// import UserProfile from "../ui/UserProfile.jsx"
import UserProfile from "../ui/UserProfile.js"

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