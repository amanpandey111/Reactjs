import { useState } from "react"

const DragAndDrop1 = () => {
  const [listItem, setListItem] = useState([
    {
      id: 1,
      item: "Item1"
    },
    {
      id: 2,
      item: "Item2"
    },
    {
      id: 3,
      item: "Item3"
    },
    {
      id: 4,
      item: "Item4"
    },
    {
      id: 5,
      item: "Item5"
    },
    {
      id: 6,
      item: "Item6"
    }
  ])
  const[draggingId, setDraggingId] = useState(null)

  function handleDragStart(e,id){
    setDraggingId(id)
  }

  function handleDrop(e,targetId){
    // e.preventDefault()
    let index1 = listItem.findIndex((ele)=>ele.id===draggingId)
    let index2 = listItem.findIndex((ele)=>ele.id===targetId);
    let domList = [...listItem];
    [domList[index1], domList[index2]] = [domList[index2], domList[index1]]
    setListItem(domList)
  }

  function handleDragOver(e){
    e.preventDefault()
  }
  console.log(listItem)

  return (
    <div>
      <ul>
        {
          listItem.map((item)=>{
            return <li key={item.id} 
            draggable
            onDragStart={(e)=>handleDragStart(e,item.id)}
            onDrop={(e)=>handleDrop(e,item.id)}
            onDragOver={handleDragOver}
            >
              {item.item}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default DragAndDrop1