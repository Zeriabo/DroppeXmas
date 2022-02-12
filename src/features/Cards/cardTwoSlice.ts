import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Cart, CartItemDetail } from '../../pages/List';


export interface CardTwoState {
    value: {
        date: string,
        id: number,
        products: (CartItemDetail)[],
        userId: number
        __v: number
    }
  }
  let initialState = { value: {} } as CardTwoState
  let cardTwoSlice = createSlice({
    name: 'cardTwo',
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
      card2Success: (state, action) => {
        state.date = action.payload.date;
        state.id=action.payload.id;
        state.products=action.payload.products;
        state.userId=action.payload.userId;
      
    },
    replaceProducts(state,action:PayloadAction<CartItemDetail[] >){
      

      state.products=action.payload;
   
    },
    ApproveTwo(state,action:PayloadAction<CartItemDetail>){
      var id = action.payload.id;
    var  targetIndex = state.products.findIndex((obj => obj.id == id));

      state.products[targetIndex].approved=true;

    },
      addProductToCardTwo(state, action: PayloadAction<CartItemDetail>) {
     
        state.products.push(action.payload)
      },
  
      removeProductFromCardTwo(state) {
       for(var p in state.products)
       {
        state.products.pop()
       }

      },
      IncrementAmountTwo(state, action: PayloadAction<CartItemDetail>) {
  
        var id = action.payload.id;
       state.products.forEach((element, index) => {
        if(element.id === id) {
          element.amount++;
        
        }
    });
      
      },
      decreaseAmountTwo(state,action: PayloadAction<CartItemDetail>) {

        var id = action.payload.id;
   
        state.products.forEach((element, index) => {
          if(element.id === id) {
            element.amount--;
          
          }
      });
        
   
      },
      setTotal2(state,action:PayloadAction<number>) {
      if(action.type=="cardTwo/setTotal2"){
        state.total=action.payload;
      }
      
    
  },
      calcTotalCard2(state,action:PayloadAction<CartItemDetail>) {       
        state.total+=action.payload.price;
      
      },
  
  
      DeclineTwo(state,action:PayloadAction<CartItemDetail>){
        var id = action.payload.id;
        var  targetIndex = state.products.findIndex((obj => obj.id == id));
    
          state.products[targetIndex].approved=false;
      },
  calcTotal(state,action:PayloadAction<CartItemDetail>) {    
      
       
    state.total+=action.payload.price;
   
   },
   calcTotalCard2Decrement(state,action:PayloadAction<CartItemDetail>) {    
      
       
    state.total-=action.payload.price;
   
   },
    },
  })
  
  export const { addProductToCardTwo,replaceProducts,card2Success,calcTotal,setTotal2,calcTotalCard2Decrement,ApproveTwo,DeclineTwo, initiateState,removeProductFromCardTwo,IncrementAmountTwo,calcTotalCard2,decreaseAmountTwo } = cardTwoSlice.actions
  export default cardTwoSlice.reducer