import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cardOneReducer from "../features/Cards/cardOneSlice";
import cardTwoSlice from "../features/Cards/cardTwoSlice";
import cardThreeSlice from "../features/Cards/cardThreeSlice";
import cardFourSlice from "../features/Cards/cardFourSlice";
import cardFiveSlice from "../features/Cards/cardFiveSlice";
import { productsApi } from "../features/ProductsApi/productsApiSlice";
import {cartsApi} from '../features/CardsApi/cardsApiSlice';
import productsSlice from "../features/Products/productsSlice";


const reducer = combineReducers({
  card1:cardOneReducer,
  card2: cardTwoSlice,
  card3: cardThreeSlice,
  card4: cardFourSlice,
  card5: cardFiveSlice,
  products:productsSlice
  

})
export const store = configureStore({
  
    reducer:{

      reducer,
      [cartsApi.reducerPath]: cartsApi.reducer,
      [productsApi.reducerPath]:productsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
     return getDefaultMiddleware().concat(productsApi.middleware).concat(cartsApi.middleware);
     
    }

});

export type  AppDispatch= typeof store.dispatch;
 export type RootState= ReturnType<typeof store.getState>;