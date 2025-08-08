import axios from "axios"
import { useEffect } from "react"

//! we are creating baseUrl which will be the same for everone
const api = axios.create({
    baseURL:`https://jsonplaceholder.typicode.com`
})

//! Get Method
export const getPost = ()=> {
    return api.get("/posts")
}

//! delete method
export const deletePost = (id)=> {
    console.log("I am in delete method");
    return api.delete(`/posts/${id}`)
}

//! post method
export const postData = (post)=> {
    return api.post('/posts',post)
}

//! put method(complete)
export const updateData = (id,post)=> {
    return api.put(`/posts/${id}`,post)
}

const PostApi = ()=> {
    const getDataPost = async ()=>{
        const res = await getPost()
        console.log(res);
    }
    useEffect(()=>{
        getDataPost()
    },[])
    return(
        <div>
            <p>hy</p>
        </div>
    )
}
export default PostApi