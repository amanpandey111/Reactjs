import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import store from './store.jsx'                 // Importing store So main component can provide access to every children 
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing bootstrap

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <App />
    {/* <LogIn/> */}
  </Provider>
    
)
