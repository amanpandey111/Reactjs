import { useState } from "react"
import './maincheck.css'

let checkList = [
  {
    id:1,
    label:"Parent1",
    child:[
      {
        id:2,
        label:"Parent2",
        child:[
          {
            id:6,
            label:"child1"
          },
          {
            id:7,
            label:"child2"
          },
          {
            id:8,
            label:"child3",
            child:[
              {
                id:9,
                label:"child4"
              },
              {
                id:10,
                label:"child5"
              },
            ]
          },
        ]
      },
      {
        id:3,
        label:"Parent3",
      },
      {
        id:4,
        label:"Parent4",
      },
      {
        id:5,
        label:"Parent5",
      }
    ]
  },
  {
    id:100,
    label:"Parent2"
  }
]

function MainCheck(){
  const [checked, setChecked] = useState({})
  return(
    <div>
      <ChilcChecBox 
      data={checkList}
      checked={checked}
      setChecked={setChecked}
      />
    </div>
  )
}

export default MainCheck

function ChilcChecBox({data, checked, setChecked}){
  console.log(data)

  function handleCheckedStatus(checked,curEle){
    console.log(curEle)
    if(curEle.child){
      console.log("You Are Welcome",curEle.child)
    }
    // const{checked} = e.target;
    setChecked((prev)=>{
      const newState = { ...prev, [curEle.id] : checked }

      const updateChildren = (curEle) => {
        console.log(curEle)
        curEle.forEach((child)=>{
          newState[child.id] = checked
          if(child.child){
            updateChildren(child.child)
          }
        })
      }
      if(curEle.child){
        updateChildren(curEle.child)
      }

      const verifyCheck = (node) => {
        const allChildrenChecked = node.child.every((child)=>prev[child.id])
      }
      console.log(prev)

      return newState
    })
  }

  return <div>
    {
      data?.map((curEle)=> <div key={curEle.id} className="parent" >
        <input type="checkbox" key={curEle.id} checked={ checked[curEle.id] || false } 
        onChange={(e)=>handleCheckedStatus(e.target.checked,curEle)}
        />
        <label htmlFor="">{curEle.label}</label>
        { curEle.child && <ChilcChecBox data={curEle.child} checked={checked} setChecked={setChecked} /> }
      </div> )
    }
  </div>
}