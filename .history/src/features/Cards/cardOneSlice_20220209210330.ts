import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Cart, CartItemDetail } from '../../App';
import {product} from '../ProductsApi/productsApiSlice'

export interface CardOneState {
    value: {
        date: string,
        id: number,
        products: (CartItemDetail)[],
        userId: number
        __v: number
    }
  }
  let initialState = { value: {} } as CardOneState
  let cardOneSlice = createSlice({
    name: 'cardOne',
    initialState:{
        date: "",
        id: 1,
        products:[]as CartItemDetail[],
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

      __v: state.__v,};

      },
      card1Success: (state, action) => {
        state.date = action.payload.date;
        state.id=action.payload.id;
        state.products=action.payload.products;
        state.total=action.payload.total;
        state.userId=action.payload.userId;
      
    },
    replaceProducts(state,action:PayloadAction<CartItemDetail[] >){
      

      state.products=action.payload;
   
    },
    Approve(state,action:PayloadAction<{}>){
      var id = action.payload.id;

    action.payload.approved=true;
    
    },
      addProductToCardOne(state, action: PayloadAction<CartItemDetail>) {
     
        state.products.push(action.payload)
      },
  
      removeProductFromCardOne(state) {
       for(var p in state.products)
       {
        state.products.pop()
       }

      },
      IncrementAmountOne(state, action: PayloadAction<number>) {
       console.log(action.payload)
        action.payload.amount++;
      
      },
      decreaseAmountOne(state,action: PayloadAction<{}>) {
    
        var id = action.payload.id;
       console.log()
        state.products.forEach((element, index) => {
          if(element.id === id) {
            element.amount--;
          
          }
      });
        
   
      },
      calcCard1Total(state,action:PayloadAction<{}>) {       
        state.total+=action.payload.price;
      
      },
      calcTotalCard1Decrement(state,action:PayloadAction<{}>) {
  
        state.total-=action.payload.price;
    
  },
  
  Decline(state,action:PayloadAction<{}>){
    action.payload.approved=false;
  },
  calcTotal(state,action:PayloadAction<{}>) {    
      
       
    state.total+=action.payload.price;
   
   },
   calcTotalDecrement(state,action:PayloadAction<{}>) {    
      
       
    state.total-=action.payload.price;
   
   },
    },
  })
  
  export const { addProductToCardOne,replaceProducts,card1Success,calcTotal,calcTotalDecrement,Approve,Decline, initiateState,removeProductFromCardOne,IncrementAmountOne,calcCard1Total,decreaseAmountOne } = cardOneSlice.actions
  export default cardOneSlice.reducer