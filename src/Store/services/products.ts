import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://fakestoreapi.com',
    }),
    endpoints: (build) => ({
        getAllProducts: build.query({
            query() {
              return {
                url: `/products`,
                method: 'GET',
              }
            }
        }),
    }),
})

export const { useGetAllProductsQuery } = productsApi