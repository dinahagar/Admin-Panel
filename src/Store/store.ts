import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './reducers/languageSlice'
import { loginApi } from './services/login'
import loginSlice from './reducers/loginSlice'
import { productsApi } from './services/products'

export const store = configureStore({
  reducer: {
    language: languageSlice,
    login: loginSlice,
    [loginApi.reducerPath]: loginApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware, productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch