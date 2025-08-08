import { createBrowserRouter,RouterProvider } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import ViewDetails from "../components/ViewDetails";
import CreateStudent from "../components/CreateStudent";
import EditStudent from "../components/EditStudent";

const MainRouter = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<StudentTable/>
        },
        {
          path:"/student/view/:studentid",
          element:<ViewDetails/>
        },
        {
          path:"/student/create",
          element:<CreateStudent/>
        },
        {
          path:"/students/edit/:studentid",
          element:<EditStudent/>
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default MainRouter