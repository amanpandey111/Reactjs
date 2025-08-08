import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import '../App.css'
import Form from "./Form";

const Posts = ()=> {
    const[data,setData] = useState([])
    const[updateDataApi,setUpdateDataApi] = useState({})
    

    //todo Function to set the data and display it
    const getPostData = async ()=> {
        const res = await getPost();
        console.log(res);
        console.log(res.data);
        setData(res.data)
    }

    useEffect(()=>{
        getPostData();
    },[])

    //todo Function to delete Post
    const handleDeletePost = async(id)=> {
        try {
            const res = await deletePost(id)
            if(res.status===200){
                const newUpdatedPost = data.filter((curPost)=>{
                    return curPost.id!==id
                })
                setData(newUpdatedPost)
            }else{
                console.log("Failed to delete the post :",res.status);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    //todo Funnction to Update(put) Post
    const handleUpdatePost = (curEle)=> {
        setUpdateDataApi(curEle)
    }

    console.log(updateDataApi);
                    
    return(
        <>
           <section className="section-form" >
            <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi} />
           </section>
           <section className="section-post">
                <ol>
                    {
                        data.map((curEle)=>{
                            const{id,body,title} = curEle
                            return(
                                <li key={id}>
                                    <p>Title : {title}</p>
                                    <p>Body : {body}</p>
                                    <button onClick={()=>handleUpdatePost(curEle)} >Edit</button>
                                    <button className="btn-delete" onClick={()=>handleDeletePost(id)} >Delete</button>
                                </li>
                            )
                        })
                    }
                </ol>
          </section>
        </>
    )
}
export default Posts