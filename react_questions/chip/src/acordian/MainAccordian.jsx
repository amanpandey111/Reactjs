import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAccordian } from './accordianSlice';
import './mainaccordian.css'

const topics = [
  {
    id:"1",
    header: "JavaScript",
    content: "JavaScript is a versatile scripting language used to build interactive web pages and dynamic web applications."
  },
  {
    id:"2",
    header: "React",
    content: "React is a JavaScript library for building fast, reusable UI components using a declarative approach."
  },
  {
    id:"3",
    header: "Node.js",
    content: "Node.js allows developers to run JavaScript on the server side, enabling full-stack JavaScript development."
  },
  {
    id:"4",
    header: "TypeScript",
    content: "TypeScript is a superset of JavaScript that adds static typing, making code more predictable and easier to debug."
  },
  {
    id:"5",
    header: "Redux",
    content: ""
  },
  {
    id:"6",
    header: "HTML",
    content: "HTML is the standard markup language for creating the structure of web pages and web applications."
  },
  {
    id:"7",
    header: "CSS",
    content: "CSS is used to style and layout web pages — it controls colors, fonts, spacing, and positioning."
  },
  {
    id:"8",
    header: "Express.js",
    content: "Express.js is a minimal and flexible Node.js framework that helps build web servers and APIs quickly."
  }
];

function MainAccordian() {
  const myAcc = useSelector((state)=>state.accordianSlice)
  const dispatch = useDispatch()

  function handleId(id){
    dispatch(setAccordian(id))
  }
  return (
    <div className="mainacc" >
      <div>
        <div>
          {
            topics.map((curObj) => {
              return (
                <div>
                  <h2 onClick={()=>handleId(curObj.id)} >{curObj.header}</h2>
                  {myAcc.id===curObj.id && (curObj.content.trim() !== "" ? <p>{curObj.content}</p> : <p>No Description Available</p>) }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MainAccordian