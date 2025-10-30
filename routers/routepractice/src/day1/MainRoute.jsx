import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LayoutRoute from "./LayoutRoute"
import Home from "./Home"
import MenCloth from "./MenCloth"
import Electronic from "./Electronic"
import WomenShop from "./WomenShop"
import ChildShop from "./ChildShop"
import GetUserid from "./GetUserid"

function MainRoute() {
    const route = createBrowserRouter([
        {
            path: "/",
            element: <LayoutRoute />,
            children:[
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/men",
                    element: <MenCloth/>
                },
                {
                    path: "/electronic",
                    element: <Electronic/>
                },
                {
                    path: "/women",
                    element: <WomenShop/>
                },
                {
                    path: "/child",
                    element: <ChildShop/>
                },
                {
                    path: "/user/:userId",
                    element: <GetUserid/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={route} />
    )
}
export default MainRoute