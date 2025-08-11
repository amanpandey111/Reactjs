
const Item = ({name,isPacked}) => {
    if(isPacked){
        return <li className="packed">{name} ✅</li>
    }else{
        return <li className="unpacked">{name}</li>
    }
}

const ConditionalPractice = () => {
  return (
    <div>
        <Item name="without checked" />
        <Item name="with checked" isPacked={true} />
    </div>
  )
}

export default ConditionalPractice