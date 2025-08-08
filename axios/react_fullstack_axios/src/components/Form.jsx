import { useEffect, useState } from 'react'
import './Posts.css'
import { postData, updateData } from '../api/PostApi'

const Form = ({data,setData,updateDataApi,setUpdateDataApi})=> {
    const[addData,setAddData] = useState({
        title:"",
        body:""
    })

    let isEmpty = Object.keys(updateDataApi).length === 0;

    //todo Get the updated data and put it into input fields
    useEffect(()=>{
        updateDataApi && setAddData({
            title:updateDataApi.title || "",
            body:updateDataApi.body || ""
        })  
    },[updateDataApi])

    const handleInputChange = (e)=> {
        const name = e.target.name
        const value = e.target.value
        setAddData((prev)=>{
            console.log(prev);
            return{...prev,[name]:value}
        })
    }

    const addPostData = async()=> {
      const res = await postData(addData)
      console.log(res);
      if(res.status==201){
        setData([...data,res.data])
        setAddData({title:"",body:""})
      }
      
    }

    const updatePostData = async ()=> {
       try {
        const res = await updateData(updateDataApi.id,addData);
        console.log(res);
        setData((prev)=>{
            // console.log(prev);
            return prev.map((curEle)=>{
                return curEle.id === updateDataApi.id ? res.data : curEle
            })
        })
        setAddData({title:"",body:""})
        setUpdateDataApi({})
       } catch (error) {
        console.log(object);
       }
       
    }

    //todo Form Submission
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value
        console.log(action);
        if(action==="ADD"){
            addPostData();
        }else if(action==="EDIT"){
            updatePostData();
        }
    }
    return(
        <form onSubmit={handleFormSubmit} action="" className='first-form'>
            <div>
                <label htmlFor="title"></label>
                <input type="text"
                  autoComplete="off"
                  id="title"
                  name="title"
                  placeholder="Add Title"
                  value={addData.title}
                  onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input type="text"
                  autoComplete="off"
                  id="title"
                  name="body"
                  placeholder="Add paragraph"
                  value={addData.body}
                  onChange={handleInputChange} />
            </div>
            <div>
                <button type="submit" value={isEmpty?"ADD":"EDIT"} className='btn btn-success btn-sm text-black'>{isEmpty?"ADD":"EDIT"}</button>
            </div>
        </form>
    )
}
export default Form