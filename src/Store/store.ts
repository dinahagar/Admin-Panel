import { configureStore } from '@reduxjs/toolkit'
import languageSlice from './reducers/languageSlice'
import { loginApi } from './services/login'
import loginSlice from './reducers/loginSlice'
import { productsApi } from './services/products'
import { categoriesApi } from './services/categories'
import categoriesSlice from './reducers/categoriesSlice'
import productsSlice from './reducers/productsSlice'

export const store = configureStore({
  reducer: {
    language: languageSlice,
    login: loginSlice,
    categories: categoriesSlice,
    products: productsSlice,
    [loginApi.reducerPath]: loginApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware, productsApi.middleware, categoriesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch