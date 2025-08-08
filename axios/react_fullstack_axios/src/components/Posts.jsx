import { deletePost, getPost } from '../api/PostApi'
import Form from './Form';
import './Posts.css'
import { useEffect, useState } from 'react'

const Posts = () => {
    const[data,setData] = useState([]);
    const[updateDataApi,setUpdateDataApi] = useState({})

//   console.log(getPost());

  const getPostData = async()=> {
    const res = await getPost()
    console.log(res.data);
    setData(res.data)
  }

  useEffect(()=>{
    getPostData();
  },[])

  //todo Function to delete 
  const handleDeletePost =  async(id)=> {
    try {
        const res = await deletePost(id);
        // console.log(res.status);
        if(res.status==200){
            const newUpdatedPosts = data.filter((curEle)=>{
                return curEle.id !== id
            })
            setData(newUpdatedPosts)
        }
    } catch (error) {
        console.log(error);
    }
  }
//   console.log(data);

  const handleUpdatePost = (curEle)=> {
    
    console.log(curEle);
    setUpdateDataApi(curEle)
  }  

  return (
    <div>
        <section>
            <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi}/>
        </section>
        <section className='container-fluid' >
            <ul className=' section-ul'>
                {
                    data.map((curEle,index)=>{
                        const{body,title,id} = curEle
                        return(
                            <li key={id} >
                                <p style={{backgroundColor:"#21303D"}} >{index+1}</p>
                                <p style={{backgroundColor:"#21303D"}} >Title : {title}</p>
                                <p style={{backgroundColor:"#21303D"}} >Body : {body}</p>
                                <button className=' custom-width text-black mx-2 btn btn-success btn-sm' onClick={()=>handleUpdatePost(curEle)} >Edit</button>
                                <button className=' custom-width text-black mx-2 btn btn-danger btn-sm' onClick={()=>handleDeletePost(id)} >Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    </div>
  )
}

export default Posts