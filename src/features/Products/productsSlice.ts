import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {product} from '../ProductsApi/productsApiSlice'

export interface ProductState {
    value: {
        id: number,
        title:string,
        description:string,
        category:string,
        image:string,
        rating:[rate:number,count:number]
        price: number
    }
  }
  let initialState = { value: [] } as unknown as ProductState
  let productsSlice = createSlice({
    name: 'products',
    initialState:[{
        id: 0,
        title:"",
        description:"",
        category:"",
        image:"",
        rating:[0,0],
        price: 0
    }],
    reducers: {

      initiateState(state, action: PayloadAction<ProductState>) {
     initialState.value={ 
       id: action.payload.value.id,
      title:  action.payload.value.title,
      description:  action.payload.value.description,
      category:action.payload.value.category,
      image:action.payload.value.image,
      rating:action.payload.value.rating,
      price:action.payload.value.price,
     
};

      },
      productsSuccess: (state, action) => {
          
          var p: ProductState ={
              value: {
                id: action.payload[0].id,
                title: action.payload[0].title,
                price: action.payload[0].price,
                description: action.payload[0].description,
                category: action.payload[0].category,
                image: action.payload[0].image,
                rating: action.payload[0].rating,
              }
          }
       action.payload.forEach((product: ProductState)=>state.push(product));
           
      
    },
     
     
    
        
   
  
     
    },
  })
  
  export const {  initiateState,productsSuccess } = productsSlice.actions
  export default productsSlice.reducer