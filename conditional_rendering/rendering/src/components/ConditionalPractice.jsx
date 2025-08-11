
const Item = ({name,isPacked}) => {
    //! conditionally returning JSX
    // if(isPacked){
    //     return <li className="packed">{name} ✅</li>
    // }else{
    //     return <li className="unpacked">{name}</li>
    // }

    //! COnditionally Returning nothing with null
    // if(isPacked){
    //     return null
    // }else{
    //     return <li className="unpacked">{name}</li>
    // }

    //! Let's Apply ternary operator( ? : )
    // return(
    //     <li className="item" >{ isPacked ? name + '✅' : name }</li>
    // )

    //! Applying ternary operator with striking through
    // return(
    //     <li className="item">
    //         { isPacked ? (
    //             <del>{name} + ✅</del>
    //         ) : name}
    //     </li>
    // )

    //! Logical AND operator
    // return(
    //     <li className="item">
    //         {name} {isPacked && <span>✅</span>}
    //     </li>
    // )

    //! conditionally assigning jsx to a variable
    let itemcontent = name
    if(isPacked){
        itemcontent = <span className="packed">{name} ✅</span>
    }
    return(
        <li>{itemcontent}</li>
    )
}

const ConditionalPractice = () => {
  return (
    <div>
        <Item name="without checked" />
        <Item name="with checked" isPacked={true} />
        <Item name="Reactjs Tutorial" isPacked={true} />
        <Item name="Javascript tutorial" />
    </div>
  )
}

export default ConditionalPractice