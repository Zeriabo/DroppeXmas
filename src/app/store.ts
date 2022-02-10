import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cardOneReducer from "../features/Cards/cardOneSlice";
import cardTwoSlice from "../features/Cards/cardTwoSlice";
import cardThreeSlice from "../features/Cards/cardThreeSlice";
import cardFourSlice from "../features/Cards/cardFourSlice";
import cardFiveSlice from "../features/Cards/cardFiveSlice";
import { productsApi } from "../features/ProductsApi/productsApiSlice";
import {cartsApi} from '../features/CardsApi/cardsApiSlice';
import productsSlice from "../features/Products/productsSlice";
import cardsSlice from "../features/Cards/cardsSlice";


const reducer = combineReducers({
  card1:cardOneReducer,
  card2:cardTwoSlice,
  card3:cardThreeSlice,
  card4:cardFourSlice,
  card5:cardFiveSlice,
  cards:cardsSlice,

  products:productsSlice
  

})
export const store = configureStore({
  
    reducer:{

      reducer
    },
    middleware:(getDefaultMiddleware)=>{
     return getDefaultMiddleware();
     
    }

});

export type  AppDispatch= typeof store.dispatch;
 export type RootState= ReturnType<typeof store.getState>;