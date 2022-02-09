import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Cart, CartItemDetail } from '../../App';
import {product} from '../ProductsApi/productsApiSlice'
  

export interface CardTwoState {
    value: {
        date: string,
        id: number,
        products: (CartItemDetail)[],
        userId: number
        total:number,
        __v: number
    }
  }

  const initialState = { value: {} } as CardTwoState
  const cardTwoSlice = createSlice({
    name: 'cardTwo',
    initialState:{
        date: "",
        id: 1,
        products:[]as CartItemDetail[],
        userId: 0,
        total : 0,
        __v: 0
    },
    reducers: {
      initiateState2(state, action: PayloadAction<Cart>) {
        initialState.value={ 
          date: action.payload.date,
          id:  action.payload.id,
          products:  action.payload.products,
          userId:2,
          total:0,
          __v: state.__v,};
   
         },
         card2Success: (state, action) => {
           state.date = action.payload.date;
           state.id=action.payload.id;
           state.products=action.payload.products;
           state.total=action.payload.total;
           state.userId=action.payload.userId;
         
       },
      DeclineTwo(state,action:PayloadAction<{}>){
  var id = action.payload.id;

  state.products.forEach((element, index) => {
    if(element.id === id) {
      element.Approve=false;
    }
  
});

},
ApproveTwo(state,action:PayloadAction<{}>){
        var id = action.payload.id;

        state.products.forEach((element) => {
          if(element.id === id) {
            element.Approve=true;
          }
       
      });
      
      },
      addProductToCardTwo(state, action: PayloadAction<CartItemDetail>) {
     
        state.products.push(action.payload)
      },
      decreaseAmountTwo(state,action: PayloadAction<{}>) {
    
        var id = action.payload.id;
  
        state.products.forEach((element, index) => {
          if(element.id === id) {
            element.amount--;
          
          }
      });
        
   
      },
      IncrementAmountTwo(state, action: PayloadAction<{}>) {

    var id = action.payload.id;
  
    state.products.forEach((element, index) => {
      if(element.id === id) {
        element.amount++;
      }
  });
 

      },
      calcTotalCard2(state,action:PayloadAction<{}>) {    
      
     
       state.total+=action.payload.price;
      
      },
      calcTotalCard2Decrement(state,action:PayloadAction<{}>) {
  
        state.total-=action.payload.price;
    
  },
    },
  })
  
  export const { addProductToCardTwo,card2Success,initiateState2, decreaseAmountTwo,IncrementAmountTwo,ApproveTwo,DeclineTwo ,calcTotalCard2,calcTotalCard2Decrement} = cardTwoSlice.actions
  export default cardTwoSlice.reducer