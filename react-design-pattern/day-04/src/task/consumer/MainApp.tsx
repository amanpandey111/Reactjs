import AuthProvider from '../provider/AuthProvider'
import LanguageProvider from '../provider/LanguageProvider'
import ConsumingComp from './ConsumingComp'

const MainApp = () => {
  return (
    <div>
        <AuthProvider>
            <LanguageProvider>
              <ConsumingComp />
            </LanguageProvider>
        </AuthProvider>
    </div>
  )
}

export default MainApp;
