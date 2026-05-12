import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from './provider/ThemeProvider.tsx'
import JustCheck from './components/JustCheck.tsx'
import BrandProvider from './provider/BrandProvider.tsx'
import MainApp from './task/consumer/MainApp.tsx'

createRoot(document.getElementById('root')!).render(
    <>
        {/* //todo Here I am Practicing */}
        {/* <ThemeProvider>
            <BrandProvider>
              <App />
            </BrandProvider>
            <JustCheck />
        </ThemeProvider> */}

        {/* //todo Here I will be doing Task */}
        <MainApp />
    </>
)
