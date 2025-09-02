import { useGetAllQuizQuery } from '../store/apiSlice';
import SingleQuiz from './SingleQuiz';
import ResultCard from './ResultCard';
import { useSelector } from 'react-redux';

type myObj = {
  correct: string,
  id: string,
  options: string[],
  question: string
}

const MainQuiz = () => {
  const data = useGetAllQuizQuery({})
  // console.log(curindex);
  const dataStore = useSelector((state:any)=>state.quizSlice)
  console.log(dataStore);
  return (
    <div 
    className='border-1 w-[95%] 2xl:w-[55%] xl:w-[80%] lg:w-[85%] md:w-[80%] p-7 m-auto mt-2 rounded bg-[#6d6f70] text-[white]' >
      {
        // dataStore.curindex >= data?.data?.length ? <h1>uyk</h1> :
        dataStore.curindex >= data?.data?.length ? <ResultCard score={dataStore.score} curindex={dataStore.curindex} noOfQuestions={data?.data?.length} /> :
        // curindex >= data?.data?.length ? <ResultCard score={dataStore.score} setcurindex={setcurindex} /> :
          (
            data?.data?.map((curObj: myObj, index: number | string) => {
              return (
                <SingleQuiz key={index} curObj={curObj} index={index} curindex={dataStore.curindex} entiredata={data?.data}
                selectedOpt={dataStore.selectedOpt}
                score={dataStore.score}
                />
                // <SingleQuiz key={index} curObj={curObj} index={index} curindex={curindex} setcurindex={setcurindex} entiredata={data?.data}
                // selectedOpt={dataStore.selectedOpt}
                // score={dataStore.score}
                // />
                // <SingleQuiz key={index} curObj={curObj} index={index} curindex={curindex} setcurindex={setcurindex} entiredata={data?.data}
                // selectedOpt={dataStore.selectedOpt} setSelectedOpt={setSelectedOpt}
                // score={dataStore.score}
                // />
              )
            })
          )
      }
    </div>
  )
}

export default MainQuiz