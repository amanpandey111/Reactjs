import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import Emart from "../navbar/Emart"
import '../navbar/accessories/Mobile'
import Mobile from "../navbar/accessories/Mobile"
import Computer from "../navbar/accessories/Computer"
import Watch from "../navbar/accessories/Watch"
import MenWear from "../navbar/accessories/MenWear"
import WomenWear from "../navbar/accessories/WomenWear"
import Furniture from "../navbar/accessories/Furniture"
import Kitchen from "../navbar/accessories/Kitchen"
import Book from "../navbar/accessories/Book"
import Fridge from "../navbar/accessories/Fridge"
import Speaker from "../navbar/accessories/Speaker"
import Ac from "../navbar/accessories/Ac"
import Tv from "../navbar/accessories/Tv"

import MobileDetails from "../navbar/accessories_function/MobileDetails"
import { getMobileDetails } from "../navbar/accessories_function/GetMobileDetail"
import ComputerDetails from "../navbar/accessories_function/ComputerDetails"
import AcDetails from "../navbar/accessories_function/AcDetails"
import TvDetails from "../navbar/accessories_function/TvDetails"
import SpeakerDetails from "../navbar/accessories_function/SpeakerDetails"
import FridgeDetails from "../navbar/accessories_function/FridgeDetails"
import BookDetails from "../navbar/accessories_function/BookDetails"
import KitchenDetails from "../navbar/accessories_function/KitchenDetails"
import FurnitureDetails from "../navbar/accessories_function/FurnitureDetails"
import WomenWearDetails from "../navbar/accessories_function/WomenWearDetails"
import MenWearDetails from "../navbar/accessories_function/MenWearDetails"
import WatchDetails from "../navbar/accessories_function/WatchDetails"

const MainRoute = ()=> {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Emart/>
                },
                {
                    path:"/mobile",
                    element:<Mobile isDirect={true}/>
                },
                {
                    path:"/mobile/:mobileId",
                    element:<MobileDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/computer",
                    element:<Computer isDirect={true}/>,
                },
                {
                    path:"/computer/:mobileId",
                    element:<ComputerDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/watches",
                    element:<Watch isDirect={true}/>
                },
                {
                    path:"/watches/:mobileId",
                    element:<WatchDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/menswear",
                    element:<MenWear isDirect={true}/>
                },
                {
                    path:"/menswear/:mobileId",
                    element:<MenWearDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/womenswear",
                    element:<WomenWear isDirect={true}/>
                },
                {
                    path:"/womenswear/:mobileId",
                    element:<WomenWearDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/furniture",
                    element:<Furniture isDirect={true}/>
                },
                {
                    path:"/furniture/:mobileId",
                    element:<FurnitureDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/kitchen",
                    element:<Kitchen isDirect={true}/>
                },
                {
                    path:"/kitchen/:mobileId",
                    element:<KitchenDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/books",
                    element:<Book isDirect={true}/>
                },
                {
                    path:"/books/:mobileId",
                    element:<BookDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/fridge",
                    element:<Fridge isDirect={true}/>
                },
                {
                    path:"/fridge/:mobileId",
                    element:<FridgeDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/speakers",
                    element:<Speaker isDirect={true}/>
                },
                {
                    path:"/speakers/:mobileId",
                    element:<SpeakerDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/ac",
                    element:<Ac isDirect={true}/>
                },
                {
                    path:"/ac/:mobileId",
                    element:<AcDetails/>,
                    loader:getMobileDetails
                },
                {
                    path:"/tv",
                    element:<Tv isDirect={true} />
                },
                {
                    path:"/tv/:mobileId",
                    element:<TvDetails/>,
                    loader:getMobileDetails
                }
            ]
        }
    ])
    return(
        <>
          <RouterProvider router={router} />
        </>
    )
}
export default MainRoute