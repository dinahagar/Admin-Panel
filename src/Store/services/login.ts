import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginState } from '../../Types/login';

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://fakestoreapi.com',
    }),
    endpoints: (build) => ({
        userLogin: build.mutation<LoginState, {username: string; password: string}>({
            query(body) {
              return {
                url: `/auth/login`,
                method: 'POST',
                body,
              }
            }
        }),
    }),
})

export const { useUserLoginMutation } = loginApi