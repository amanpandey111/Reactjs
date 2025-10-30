import { useParams } from "react-router-dom"

const GetUserid = () => {
  const userId = useParams()
  console.log(userId);
  return (
    <div>GetUserid</div>
  )
}

export default GetUserid