import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import store from './redux_store/store.jsx'   //! this is First Time Practice
import store from './practice1/redux_store/store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>,
  // <Provider store={store} >
  //   <App />
  // </Provider>,
)
