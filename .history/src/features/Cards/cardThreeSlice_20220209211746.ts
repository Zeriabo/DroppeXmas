import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Cart, CartItemDetail } from '../../App';
import {product} from '../ProductsApi/productsApiSlice'
  

export interface CartThreeState {
    value: {
        date: string,
        id: number,
        products: (CartItemDetail)[],
        userId: number
        total:number,
        __v: number
    }
  }

  const initialState = { value: {} } as CartThreeState
  const cardThreeSlice = createSlice({
    name: 'cardThree',
    initialState:{
        date: "",
        id: 3,
        products:[],
        userId: 0,
        total : 0,
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
         card3Success: (state, action) => {
           state.date = action.payload.date;
           state.id=action.payload.id;
           state.products=action.payload.products;
           state.total=action.payload.total;
           state.userId=action.payload.userId;
         
       },
      DeclineThree(state,action:PayloadAction<{}>){
  var id = action.payload.id;

  state.products.forEach((element, index) => {
    if(element.id === id) {
      element.Approve=false;
    }
  
});

},
ApproveThree(state,action:PayloadAction<{}>){
        var id = action.payload.id;

        state.products.forEach((element) => {
          if(element.id === id) {
            element.Approve=true;
          }
       
      });
      
      },
      addProductToCardThree(state, action: PayloadAction<CartItemDetail>) {
     
        state.products.push(action.payload)
      },
      decreaseAmountThree(state,action: PayloadAction<{}>) {
    
        var id = action.payload.id;
  
        state.products.forEach((element, index) => {
          if(element.id === id) {
            element.amount--;
          
          }
      });
        
   
      },
      IncrementAmountThree(state, action: PayloadAction<{}>) {

    var id = action.payload.id;

    state.products.forEach((element, index) => {
      if(element.id === id) {
        element.amount++;
      }
  });
 

      },
      decrementAmountThree(state, action: PayloadAction<{}>) {

        var id = action.payload.id;
   
        state.products.forEach((element, index) => {
          if(element.id === id) {
            element.amount--;
          }
      });
     
    
          },
      calcTotalCard3(state,action:PayloadAction<{}>) {    
      
       
       state.total+=action.payload.price;
      
      },
      
      calcTotalCard3Decrement(state,action:PayloadAction<{}>) {
     
        state.total-=action.payload.price;
    
  },
    },
  })
  
  export const { addProductToCardThree,card3Success,decrementAmountThree,IncrementAmountThree,ApproveThree,DeclineThree ,calcTotalCard3Decrement,calcTotalCard3} = cardThreeSlice.actions
  export default cardThreeSlice.reducer