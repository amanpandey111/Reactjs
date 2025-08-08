import axios from "axios"
const api = axios.create({
    baseURL:"https://www.omdbapi.com/"
});

// creating a get req function
export const getMovie = ()=> {
    return api.get("?s=guardians&apikey=c1ae2c28")
}