export interface AppProps {
    setLocale: (locale: 'en' | 'ar') => void;
}

export interface LanguageState {
    locale: string;
    direction: 'ltr' | 'rtl';
}