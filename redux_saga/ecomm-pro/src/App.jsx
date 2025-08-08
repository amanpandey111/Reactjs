import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import MainRouter from './router/MainRouter'

function App() {
  return (
    <>
     {/* <div className="App">
      <Header/>
      <Main/>
     </div> */}
     <MainRouter>
      <h1>Hello</h1>
     </MainRouter>
    </>
  )
}

export default App