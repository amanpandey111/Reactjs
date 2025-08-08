// import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import './pages.css'
import { getMovie } from "../services/GetService";

const Movie = ()=> {
    const[data,setData] = useState([])
    // const API = "https://www.omdbapi.com/?s=guardians&apikey=c1ae2c28";
    const getMovieData = async ()=> {
        try{
            // const res = await axios.get(API)
            const res = await getMovie()
            setData(res.data.Search)            
        }catch(error){
            console.log(error);
            console.log(error.message);
            console.log("Error Status :",error.response.status);
            console.log("Error data :",error.response.data);
        }
    }
    useEffect(()=>{
        console.log(getMovieData());
    },[])
    console.log(data);
    return(
        <div className=" main-div-ul container">
            <ul className="container grid grid-four--cols" >
                {
                    data.map((curEle)=>{
                        return(
                            <Card key={curEle.imdbID} movieData={curEle} />
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Movie