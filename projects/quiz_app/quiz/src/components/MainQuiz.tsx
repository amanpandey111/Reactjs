import { useState } from 'react';
import { useGetAllQuizQuery } from '../store/apiSlice';
import SingleQuiz from './SingleQuiz';
import ResultCard from './ResultCard';

type myObj = {
  correct: string,
  id: string,
  options: string[],
  question: string
}

const MainQuiz = () => {
  const [curindex, setcurindex] = useState(0)
  const data = useGetAllQuizQuery({})
  console.log(curindex);
  return (
    <div className='border-2 w-[55%] p-7 m-auto mt-2 bg-[#ffffff]' >
      {
        curindex >= data?.data?.length ? <ResultCard/> :
          (
            data?.data?.map((curObj: myObj, index: number | string) => {
              return (
                <SingleQuiz key={index} curObj={curObj} index={index} curindex={curindex} setcurindex={setcurindex} entiredata={data?.data} />
              )
            })
          )
      }
    </div>
  )
}

export default MainQuiz