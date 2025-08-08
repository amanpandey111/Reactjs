import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Parent2 from './ex2/Parent2.jsx'
import Parent3 from './ex3/Parent3.jsx'

createRoot(document.getElementById('root')).render(
  // <Parent2>
  //   <App />
  // </Parent2>,
  <Parent3>
    <App/>
  </Parent3>
)
