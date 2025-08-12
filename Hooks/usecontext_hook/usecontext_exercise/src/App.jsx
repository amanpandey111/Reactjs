import './App.css'
import Child1 from './ex1/Child1'
import Parent1 from './ex1/Parent1'
import Child2 from './ex2/Child2'
import Child3 from './ex3/Child3'
import Child4 from './ex3/Child4'
import Parent3 from './ex3/Parent3'
import Parent4 from './ex3/Parent4'
import Child from './warmup/Child'
import Parent from './warmup/Parent'

function App() {

  return (
    <>
      {/* <Parent>
        <Child/>
      </Parent> */}

      {/* <Parent1>
        <Child1/>
      </Parent1> */}

      {/* <Parent3>
        <Child3/>
      </Parent3> */}

      <Parent4>
        <Child4/>
      </Parent4>
    </>
  )
}

export default App
