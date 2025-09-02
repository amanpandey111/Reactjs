import { useDispatch } from "react-redux"
import { indexchange, scorechange } from "../store/quizSlice"

const ResultCard = (props:any) => {
  const{score,curindex,noOfQuestions} = props
  // const{score,setcurindex,curindex} = props
  // console.log(noOfQuestions);
  const dispatch = useDispatch()
  return (
    <div>
        <h2 className="text-center" >You Are Done With Your Assessment</h2>
        <h3 className="text-center mt-2" >You Have scored {score} out of {noOfQuestions}</h3>
        <button className="mt-3 cursor-pointer p-1.5 bg-[#a2c5e8] text-[black] font-medium block m-auto rounded"
        onClick={()=>{
          // setcurindex(0)
          dispatch(indexchange(-curindex))
          dispatch(scorechange(-score))
        }}
        >Re-start Your Assessment</button>
    </div>
  )
}

export default ResultCard