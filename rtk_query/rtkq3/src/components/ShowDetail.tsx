import React, { useState } from 'react'
import { useAddDataMutation, useDeleteDataMutation, useEditDataMutation, useGetAllDataQuery } from '../store/apiOperate'

const ShowDetail = () => {
    const data = useGetAllDataQuery()
    const [deleteMethod, restData] = useDeleteDataMutation()
    const [addMethod, restData1] = useAddDataMutation()
    const [editMethod, restData2] = useEditDataMutation()

    const [formData, setFormData] = useState({
        id: "",
        title: ""
    })
    const [editData, setEditData] = useState({
        id:"",
        title:""
    })
    const [isThereId, setIsthereId] = useState(false)

    function handleForm(event) {
        const { name, value } = event.target
        if(name=="id"){
            const bool = data.data.some((curEle)=>curEle.id==value)
            setIsthereId(bool)
        }
        setFormData((prev) => ({ ...prev, [name]: value }))
        // setIsthereId()
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(editData);
        if(editData.id){
            editMethod(editData)
        }else{
            addMethod(formData)
        }
        setEditData({
            id: "",
            title: ""
        })
        setFormData({
            id: "",
            title: ""
        })
    }
    function handleEdit(data){
        setEditData(data)
    }
    function handleFormEdit(e){
        const { name, value } = event.target
        setEditData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <div>
                <form action="" onSubmit={handleSubmit} >
                    <input required name='id' value={editData.id || formData.id} onChange={editData.id ? handleFormEdit : handleForm} type="text" placeholder='Enter Id' 
                    disabled ={ editData.id.length>=1 ? true : false } />
                    { isThereId && <p>Id already exists</p> }
                    <input required name='title' value={editData.title || formData.title} onChange={editData.id ? handleFormEdit : handleForm} type="text" placeholder='Enter Title' />
                    <button type='submit' disabled={ isThereId } >{ editData.id.length>=1 ? "Edit" : "Add" }</button>
                </form>
            </div>
            {
                data?.data?.map((curEle) => {
                    return (
                        <div style={{ display: "flex", gap: "20px" }} >
                            <p>{curEle.title}</p>
                            <button onClick={()=>handleEdit(curEle)} >Edit</button>
                            <button onClick={() => deleteMethod(curEle.id)} >delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowDetail