import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartItemDetail } from '../../pages/List';
import cardOneSlice from './cardOneSlice';
export interface CardsState {
  value: []
}
let initialState = { value: [] } as CardsState
let cardsSlice = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {

    initiateState(state, action: PayloadAction<Cart[]>) {


    },

    addcard: (state, action: PayloadAction<{}>) => {
      var b: boolean = false;

      state.forEach((e) => {
        if (e.id == action.payload.id) {
          b = true;
          return;
        }
      })

      if (!b) {
        state.push(action.payload)
      }



    },



  },
})

export const { addcard, getCard } = cardsSlice.actions
export default cardsSlice.reducer