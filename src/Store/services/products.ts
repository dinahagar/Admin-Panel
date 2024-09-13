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
        addProduct: build.mutation({
            query(body) {
                return {
                    url: `/products`,
                    method: 'POST',
                    body
                }
            }
        }),
        deleteProduct: build.mutation({
            query({ id }) {
                return {
                    url: `/products/${id}`,
                    method: 'DELETE'
                }
            }
        })
    }),
})

export const { useGetAllProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsApi