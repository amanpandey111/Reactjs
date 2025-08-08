import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './store.jsx'

//todo : Let's Write code to connect redux with our rect
import {Provider} from "react-redux"
import { store } from './store.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
)
