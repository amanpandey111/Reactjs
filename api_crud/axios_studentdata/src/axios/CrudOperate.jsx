import axios from "axios";

//! creating the baseurl
const api = axios.create({
    baseURL:"http://localhost:3000/"
})

//! fetching the api
export const fetchData = () => {
    let res = api.get("students")
    console.log(res);
    return res
}

//! Let's Add The data In our Api
export const addData = (data) => {
    api.post("students",data)
}

//! Deleting the post
export const deleteData = (sid) => {
    console.log(sid);
    api.delete(`students/${sid}`)
}

//! applying changes 
export const saveChange = (id,data) => {
    // console.log("Let's apply the changes");
    console.log("Let's Apply the changes ",id,data);
    api.put(`students/${id}`,data)
    // api.delete(`students/${id}`)
    // api.post("students",data)
    console.log("applied changes successfully");
}