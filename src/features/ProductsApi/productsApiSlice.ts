import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CartItemDetail } from '../../List'

 export interface product{
     id:number,
     title:string,
     price:number,
     description:string,
     category:string,
     image:string
     rating:[rate:number,count:number],
     amount:1
    }
 export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    endpoints: (builder) => ({
      getProducts: builder.query<CartItemDetail[],number|void>({
        query(limit=30){
       return `?limit=${limit}`
        },
    
      }), 
    }),
  })
  export const { useGetProductsQuery} = productsApi

