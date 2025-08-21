import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <div className='h-screen bg-gradient-to-b from-[rgba(119, 201, 18, 1)] via-[rgb(215, 208, 218)]-500 to-pink-200'>
    <App />
  </div>
  // <div className='border-5 h-screen bg-[linear-gradient(rgb(229, 233, 224), rgb(215, 208, 218), rgb(201, 183, 211), rgb(187, 159, 205), rgb(172, 135, 198))]'>
  //   <App />
  // </div>
)
