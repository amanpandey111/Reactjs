import { act, useEffect, useState } from "react"
import { postData, updateData } from "../api/PostApi"

const Form = ({data,setData,updateDataApi,setUpdateDataApi})=> {
    // console.log(updateDataApi);
    const[addData,setAddData] = useState({
        title:"",
        body:""
    })

    let isEmpty = Object.keys(updateDataApi).length == 0

    // get the updated data and add it into input field
    useEffect(()=>{
       updateDataApi && setAddData({
                        title:updateDataApi.title || "",
                        body:updateDataApi.body || ""
                    })
    },[updateDataApi])
    console.log(addData);

    const handleInputChange = (e)=> {
        //! const{name,value} = e.target 
        const name = e.target.name
        const value = e.target.value
        // console.log(name,value);
        setAddData((prev)=>{
            return {...prev,[name]:value}
        })
    }

    const addPostData = async()=> {
        const res = await postData(addData)
        if(res.status===201){
            console.log("My Data addedd successfully in server Now I will add it into my UI");
            setData([...data,addData])
        }
    }

    const updatePostData = async()=> {
        const res = await updateData(updateDataApi.id,addData)
        // console.log(res.data.title);
        setData((prev)=>{
            return prev.map((curEle)=>{
                return curEle.id===res.data.id?res.data:curEle;
            })
        })
        setAddData({
            title:"",
            body:""
        })
        setUpdateDataApi({})
    }

    const handleFormSubmit = (e)=> {
        e.preventDefault();
        // console.log(addData);
        const action = e.nativeEvent.submitter.value
        console.log(action);
        if(action=="Add"){
            addPostData()
            setAddData({title:"",body:" "})
        }else if(action=="Edit"){
            updatePostData()
        }
    }

    return(
        <form onSubmit={handleFormSubmit}>
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
                id="body"
                name="body"
                placeholder="Add Post"
                value={addData.body}
                onChange={handleInputChange} />
            </div>
            <button type="submit" value={isEmpty?"Add":"Edit"}>{isEmpty?"Add":"Edit"}</button>
        </form>
    )
}
export default Form