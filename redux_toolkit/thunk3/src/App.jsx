import './App.css'
import Counter from './rtk1/Counter'
import EmployeeDetail from './rtk1/EmployeeDetail'
import store from './rtk1/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <section className='mainsection'>
        <Counter />
        {/* <hr /> */}
        <EmployeeDetail />
      </section>
    </Provider>
  )
}

export default App
