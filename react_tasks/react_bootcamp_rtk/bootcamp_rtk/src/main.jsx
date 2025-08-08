import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';     // importing bootstrap so i can apply
import store from "./app/store.jsx"                // importing global store
import { Provider } from 'react-redux';            // importing Provider so we can pass the store globally

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)