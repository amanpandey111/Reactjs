// import { useParams } from "react-router-dom";

export const getMoviesDetails = async({params})=> {
    // const params = useParams()
    console.log(params);
    const id = params.movieID
    try {
    //    const res = await fetch(`https://www.omdbapi.com/?s=guardians&apikey=${import.meta.env.VITE_API_KEY}`);
       const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
       const data = await res.json()
       return data
    } catch (error) {
       console.log(error);
    }
}