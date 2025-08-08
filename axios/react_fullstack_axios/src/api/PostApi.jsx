import axios from 'axios'

const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

//todo get method
export const getPost = ()=> {
  // console.log(api.get("/posts"));
    return api.get("/posts")
}

//todo delete method
export const deletePost = (id)=> {
  return api.delete(`/posts/${id}`)
}

//todo post method
export const postData = (post) => {
  return api.post("/posts/",post)
}

//todo put method(It means complete modification)
export const updateData = (id,post)=> {
  return api.put(`/posts/${id}`,post)
}

const PostApi = () => {
  return (
    <div>PostApi</div>
  )
}

export default PostApi