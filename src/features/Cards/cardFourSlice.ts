import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Cart, CartItemDetail } from '../../App';
import {product} from '../ProductsApi/productsApiSlice'

export interface CardFourState {
    value: {
        date: string,
        id: number,
        products: (CartItemDetail)[],
        userId: number,
        total:number,
        __v: number
    }
  }
  const initialState = { value: {} } as CardFourState
  const cardFourSlice = createSlice({
    name: 'cardFour',
    initialState:{
        date: "",
        id: 4,
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
         card4Success: (state, action) => {
           state.date = action.payload.date;
           state.id=action.payload.id;
           state.products=action.payload.products;
           state.total=action.payload.total;
           state.userId=action.payload.userId;
         
       },
      addProductToCardFour(state, action: PayloadAction<CartItemDetail>) {
     
        state.products.push(action.payload)
      },
      removeProductFromCardFour(state) {
        state.products.pop()
      },
      IncrementAmountFour(state, action: PayloadAction<number>) {
console.log(action.payload)
        state.products.forEach((element, index) => {
        {
            if(element.id==action.payload.id)
            {
                element.amount++;
            }
        }
      })
      },
      decreaseAmountFour(state,action: PayloadAction<{}>) {
    
        var id = action.payload.id;
  
        state.products.forEach((element, index) => {
          if(element.id === id) {
            element.amount--;
          
          }
      });
        
   
      },
      ApproveCard4(state,action:PayloadAction<{}>){
        var id = action.payload.id;
      var  targetIndex = state.products.findIndex((obj => obj.id == id));
  
        state.products[targetIndex].approved=true;
  
      },
      Declinecard4(state,action:PayloadAction<{}>){
        var id = action.payload.id;
        var  targetIndex = state.products.findIndex((obj => obj.id == id));
    
          state.products[targetIndex].approved=false;
      },
      calcCard4Total(state,action:PayloadAction<{}>) {       
        state.total+=action.payload.price;
      
      },
      calcTotalCard4Decrement(state,action:PayloadAction<{}>) {
  
        state.total-=action.payload.price;
    
  },
  
     
    },
  })
  
  export const { addProductToCardFour,card4Success, removeProductFromCardFour,IncrementAmountFour,calcCard4Total,calcTotalCard4Decrement,decreaseAmountFour,Declinecard4 ,ApproveCard4} = cardFourSlice.actions
  export default cardFourSlice.reducer