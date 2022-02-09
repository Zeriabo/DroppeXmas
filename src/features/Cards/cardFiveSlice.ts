import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Cart, CartItemDetail } from '../../App';
import {product} from '../ProductsApi/productsApiSlice'
  

export interface CardFiveState {
    value: {
        date: string,
        id: number,
        products: (CartItemDetail)[],
        userId: number,
        total : number,
        __v: number
    }
  }
  const initialState = { value: {} } as CardFiveState
  const cardFiveSlice = createSlice({
    name: 'cardFive',
    initialState:{
        date: "",
        id: 5,
        products:[],
        userId: 0,
        total:0,
        __v: 0
    },
    reducers: {
      initiateState(state, action: PayloadAction<Cart>) {
        initialState.value={ 
          date: action.payload.date,
         id:  action.payload.id,
         products:  action.payload.products,
         userId:1,
         total:0,
         __v: state.__v,};
   
         },
         card5Success: (state, action) => {
           state.date = action.payload.date;
           state.id=action.payload.id;
           state.products=action.payload.products;
           state.total=action.payload.total;
           state.userId=action.payload.userId;
         
       },
      addProductToCardFive(state, action: PayloadAction<CartItemDetail>) {
  
        state.products.push(action.payload)
      },
      removeProductFromCardFive(state) {
        state.products.pop()
      },
      IncrementAmountFive(state, action: PayloadAction<number>) {

        state.products.forEach((val)=>
        {
            if(val.id==action.payload.id)
            {
               val.amount++;
            }
        })
      },
      decreaseAmountFive(state,action: PayloadAction<{}>) {
    
        var id = action.payload.id;
  
        state.products.forEach((element, index) => {
          if(element.id === id) {
            element.amount--;
          
          }
      });
        
   
      },
      calcCard5Total(state,action:PayloadAction<{}>) {       
        state.total+=action.payload.price;
      
      },
      calcTotalCard5Decrement(state,action:PayloadAction<{}>) {
  
        state.total-=action.payload.price;
    
  },
    },
  })
  
  export const { addProductToCardFive,card5Success,decreaseAmountFive, removeProductFromCardFive,IncrementAmountFive,calcCard5Total,calcTotalCard5Decrement } = cardFiveSlice.actions
  export default cardFiveSlice.reducer