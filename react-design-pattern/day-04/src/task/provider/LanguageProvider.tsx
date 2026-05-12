import { useState } from "react";
import { LangContext } from "../context";

type LanguageOptions = 'en' | 'hi' | 'tl' | 'bg';

interface TranslationKeys {
    heading: string;
}

type LanguageSchema = {
    [key in LanguageOptions]: TranslationKeys;
}

interface LanguageOption {
    code: LanguageOptions;
    name: string;
}

interface LanguageState {
    language: LanguageOptions;
    details: TranslationKeys;
}

const LanguageProvider = ({ children }) => {
    const [languageState, setLanguageState] = useState<LanguageState>({
        language: 'en' as LanguageOptions,
        details: {heading: 'Welcome To Infoane Technologies Pvt Ltd'} as TranslationKeys
    })

    const lan: LanguageSchema = {
        en: {
            heading: 'Welcome To Infoane Technologies Pvt Ltd',
        },

        hi: {
            heading: 'इन्फोएन टेक्नोलॉजीज प्राइवेट लिमिटेड में आपका स्वागत है',
        },

        tl: {
            heading: 'ఇన్ఫోఏన్ టెక్నాలజీస్ ప్రైవేట్ లిమిటెడ్‌కు స్వాగతం',
        },

        bg: {
            heading: 'ইনফোএন টেকনোলজিস প্রাইভেট লিমিটেডে স্বাগতম',
        },
    };

    const languageOptions: LanguageOption[] = [
        {
            code: 'en',
            name: 'English'
        },
        {
            code: 'hi',
            name: 'Hindi'
        },
        {
            code: 'tl',
            name: 'Telugu'
        },
        {
            code: 'bg',
            name: 'Bengali'
        }
    ];
    
    const toggleLanguage = (text: LanguageOptions) => {
        setLanguageState({
            language: text,
            details: lan[text]
        })
        
    }
    
    return (
        <LangContext value={{ languageOptions, languageState, toggleLanguage }}>
            {children}
        </LangContext>
    )
}

export default LanguageProvider;
