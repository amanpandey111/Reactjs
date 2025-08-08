import { createBrowserRouter,RouterProvider } from "react-router-dom"
import StudentTable from "../components/StudentTable"
import CreateStudent from "../components/CreateStudent"
import EditStudent from "../components/EditStudent"
import ViewDetails from "../components/ViewDetails"
const MainRouter = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<StudentTable/>
        },
        {
          path:"/student/create",
          element:<CreateStudent/>
        },
        {
          path:"/student/edit/:studentid",
          element:<EditStudent/>
        },
        {
          path:"/student/view/:studentid",
          element:<ViewDetails/>
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default MainRouter