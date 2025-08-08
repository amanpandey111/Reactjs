import './App.css'
import MainRoute from './components/router/MainRoute';

function App() {
  // const mycourse = useSelector((state)=>state.mycourse)
  // console.log(mycourse);
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  return (
    <>
      <MainRoute/>
    </>
  )
}

export default App
