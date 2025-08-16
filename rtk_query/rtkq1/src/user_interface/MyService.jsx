import { useEffect, useState } from "react"
import axios from "axios"
import { useAddDataMutation, useDeleteDataMutation, useGetAllSectionsQuery, useUpdateDataMutation } from "../store2/apiSlice"

const MyService = () => {
    const [addData,setAddData] = useState({
        id:"",title:""
    })
    const [ error, setError ] = useState({})
    const [togglebutton,setToggleButton] = useState("submit")
    const myquery = useGetAllSectionsQuery()
    const [updatemethod, restpara] = useUpdateDataMutation()
    let odata = myquery.data
    const postmethod = useAddDataMutation()
    const [deletemethod, restdata] = useDeleteDataMutation()
    const [ addfunction, remaining ] = postmethod
    const handleinputchange = (e) =>{
        console.log(odata);
        const {name,value} = e.target
        console.log(name,value);
        let s = false
        if(name=="id"){
            s = odata.some((curEle)=>curEle.id==value)
            console.log(s);
            if(s) {setError({iderror:"ID Already Exists"})}
            else{setError({})}
        }
        setAddData((prev)=>({...prev,[name]:value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(addData);
        if(togglebutton=="edit"){
            console.log("let's edit the data");
            setToggleButton("submit")
            updatemethod(addData)
        }
        else{
            addfunction(addData)
        }
        setAddData({id:"",title:""})
    }
    const handleDelete = (id) => {
        console.log(typeof Number(id));
        deletemethod(Number(id))
    }
    const handleGetData = (data) => {
        setAddData(data)
    }
    console.log(error);
  return (
   <section>
      <div>
        <div>
            <form action="" onSubmit={handleSubmit} >
                <input required autoComplete="off" disabled={ togglebutton=="edit" ? true : false } type="number" name="id" placeholder="enter id" value={addData.id} onChange={handleinputchange} />
                { error?.iderror && <p>{error?.iderror}</p> }
                <input required type="text" name="title" placeholder="Enter title" value={addData.title} onChange={handleinputchange} />
                <button
                disabled={error?.iderror ? true : false}
                >{togglebutton}</button>
            </form>
        </div>
        <div>
            {
                odata?.map((curEle)=>{
                    return(
                        <div key={curEle.id} >
                            <span>{curEle.title}</span>
                            <button onClick={()=>handleDelete(curEle.id)}>delete</button>
                            <button onClick={()=>{handleGetData(curEle);setToggleButton("edit")}} >edit</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
   </section>
  )
}

export default MyService