import { useState } from "react"

function DragDrop(){
  const[listItem, setListItem] = useState(["Aman Pandey","Anitha","Dinesh","Richitha","Akhil","Roja","Ramesh","Harinath"])
  const[draggingItem, setDraggingItem] = useState(null)

  function handleDragStart(e,initialId){
    console.log(initialId)
    setDraggingItem(initialId)
  }
  console.log(draggingItem)

  function handleDrop(e,targetId){
    e.preventDefault()
    let duplicateList = [...listItem];
    [duplicateList[draggingItem],duplicateList[targetId]] = [duplicateList[targetId],duplicateList[draggingItem]]
    setListItem(duplicateList)
  }

  function handleDragEnd(e){
    e.preventDefault()
  }
  console.log("rendering")
  return <div>
    <ul>
      {
        listItem.map((item, index)=> <li key={index} 
        draggable
        onDragStart={(e)=>handleDragStart(e,index)}
        onDrop={(e)=>handleDrop(e,index)}
        onDragOver={(e)=>handleDragEnd(e,index)}
        >{item}</li> )
      }
    </ul>
  </div>
}

export default DragDrop