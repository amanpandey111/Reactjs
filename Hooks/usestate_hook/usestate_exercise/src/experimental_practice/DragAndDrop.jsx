import { useState } from "react"

function DragAndDrop(){
  const[draggingItem, setDraggingItem] = useState(null)

  function handleDragStart(e,id){
    setDraggingItem(id)
  }
  console.log(draggingItem)

  function handleDragOver(e){
    e.preventDefault()
  }

  function handleDrop(e,id){
    e.preventDefault()
    alert(`Dropped Item With Id : ${draggingItem} into Item With Id: ${id}`)
  }

  return <div>
    <h2>Drag and Drop In React</h2>

    <div
    id="item1"
    draggable
    onDragStart={(e)=>handleDragStart(e,"item1")}
    >Item1</div>

    <div
    id="item2"
    draggable
    onDragStart={(e)=>handleDragStart(e,"item2")}
    >Item2</div>

    <div
    id="dropZone"
    onDrop={(e)=>handleDrop(e,'dropZone')}
    onDragOver={handleDragOver}
    >Drop Item Here</div>
  </div>
}

export default DragAndDrop