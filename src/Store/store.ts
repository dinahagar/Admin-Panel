import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './reducers/languageSlice'
import { loginApiApi } from './services/login'
import loginSlice from './reducers/loginSlice'

export const store = configureStore({
  reducer: {
    language: languageSlice,
    login: loginSlice,
    [loginApiApi.reducerPath]: loginApiApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApiApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch