import { createBrowserRouter,RouterProvider } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import CreateStudent from "../components/CreateStudent";
import ViewDetails from "../components/ViewDetails";
import EditStudent from "../components/EditStudent";


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
            path:"/student/view/:studentid",
            element:<ViewDetails/>
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