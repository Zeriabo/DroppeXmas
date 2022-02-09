import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface card{
     id:number,
     date:string,
     products:[]
}
 export const cartsApi = createApi({
    reducerPath: 'carts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
      getCarts: builder.query<card[],number|void>({
        query(limit=5){
       return `/carts?limit=${limit}`
        },
    
      }), 
    }),
  })
  export const { useGetCartsQuery} = cartsApi
