import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store1/store.jsx'
import { Provider } from 'react-redux'
import apiSlice from './store1/apiSlice.jsx'

//! this is the first way to prefetch data, you can use outside of the Provider
store.dispatch(apiSlice.endpoints.getTodo.initiate(13))

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)