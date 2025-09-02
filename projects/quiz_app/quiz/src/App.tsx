import './App.css'
import MainQuiz from './components/MainQuiz';

function App() {

  return (
    <div className='h-screen bg-[#f0f8ff] pt-3'>
      <h2 
      className='w-max m-auto p-2 bg-[#6d6f70] border-1 text-[white] rounded'
      >Let's Build a Quiz App</h2>
      <MainQuiz/>
    </div>
  )
}

export default App
