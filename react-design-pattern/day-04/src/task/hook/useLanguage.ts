import { use } from 'react'
import { LangContext } from '../context'

const useLanguage = () => {
    const { languageOptions, languageState, toggleLanguage } = use(LangContext);
    return [ languageOptions, languageState, toggleLanguage ];
}

export default useLanguage;
