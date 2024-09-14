import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://fakestoreapi.com',
    }),
    endpoints: (build) => ({
        getAllCategories: build.query<string[], void>({
            query() {
              return {
                url: `/products/categories`,
                method: 'GET'
              }
            }
        }),
        getCategoryProducts: build.query({
            query({ category }) {
              return {
                url: `/products/category/${category}`,
                method: 'GET'
              }
            }
        })
    }),
})

export const { useGetAllCategoriesQuery, useGetCategoryProductsQuery } = categoriesApi