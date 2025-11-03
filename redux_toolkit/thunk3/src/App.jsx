import './App.css'
import Counter from './rtk1/Counter'
import EmployeeDetail from './rtk1/employees/EmployeeDetail'
import store from './rtk1/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Provider store={store}>
      <section className='mainsection'>
        <Counter />
        {/* <hr /> */}
        <EmployeeDetail />
      </section>
      <ToastContainer />
    </Provider>
  )
}

export default App
