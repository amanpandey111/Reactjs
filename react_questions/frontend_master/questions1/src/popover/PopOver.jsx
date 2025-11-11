import { createContext, useContext, useRef, useState } from "react"
import './popover.css'

const popOverContext = createContext();

const PopOver = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  console.log(contentRef)

  function togglePopover(){
    const newValue = !isOpen;
    setIsOpen(newValue)
    if(newValue){
      const {top , left, height} = contentRef.current.getBoundingClientRect();
      const contentPosition = top + height;
      if(contentPosition >= window.innerHeight){
        contentRef.current.style.top = `${top - contentPosition}px`
      }
    }
  }

  return (
    <popOverContext.Provider value={{ isOpen, togglePopover, contentRef }} >
      <div className="popover" > {children} </div>
    </popOverContext.Provider>
  )
}

export default PopOver

function Action({label, node, children}){
  const { togglePopover } = useContext(popOverContext)
  if(node){
    return <button>{node}</button>
  }
  if(children){
    return <button onClick={togglePopover} >{children}</button>
  }
  return <button>{label}</button>
}

function Content({ children }){
  const { isOpen, contentRef } = useContext(popOverContext)
  const className = isOpen ? "content" : "content-hidden";
  return <div className={className} ref={contentRef} >{children}</div>
}

PopOver.Action = Action;
PopOver.Content = Content;
