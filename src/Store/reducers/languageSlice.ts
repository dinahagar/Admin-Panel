import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageState } from "../../Types/app";

const initialState: LanguageState = {
    locale: 'en',
    direction: 'ltr',
  };
  
  const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
      setLanguage: (state, action: PayloadAction<{ locale: string; direction: 'ltr' | 'rtl' }>) => {
        const { locale, direction } = action.payload;
        state.locale = locale;
        state.direction = direction;
      },
    },
  });
  
  export const { setLanguage } = languageSlice.actions;
  export default languageSlice.reducer;