import React, { useEffect } from "react";
import { Wrapper } from "../atoms/cart";
import { ButtonWrapper } from "../atoms/button";
import CartItem from "./CartItem";
import { CartItemDetail } from "../../List";
import useForceUpdate from 'use-force-update';
import { addcard, getCard } from '../../features/Cards/cardsSlice'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTotal } from "../../features/Cards/cardOneSlice"
import { setTotal2 } from "../../features/Cards/cardTwoSlice";
import { setTotal3 } from "../../features/Cards/cardThreeSlice";
import { setTotal4 } from "../../features/Cards/cardFourSlice";
import { setTotal5 } from "../../features/Cards/cardFiveSlice";

type Props = {
  childId: number,
  date: string,
  cartItems: CartItemDetail[];
  increaseAmount: (clicked: CartItemDetail) => void;
  addToCart: (clicked: CartItemDetail) => void;
  decreaseAmount: (id: CartItemDetail) => void;
  child: number;
};

const Cart: React.FC<Props> = ({ cartItems, child }) => {

  const dispatch = useAppDispatch();
  const card1 = useAppSelector(state => state.reducer.card1)
  const card2 = useAppSelector(state => state.reducer.card2)
  const card3 = useAppSelector(state => state.reducer.card3)
  const card4 = useAppSelector(state => state.reducer.card4)
  const card5 = useAppSelector(state => state.reducer.card5)

  function confirm(cardnumber: number) {

    switch (cardnumber) {
      case 1:

        dispatch(addcard(card1))
        break;

      case 2:

        dispatch(addcard(card2))
        break;

      case 3:

        dispatch(addcard(card3))
        break;

      case 4:
        dispatch(addcard(card4))
        break;

      case 5:
        dispatch(addcard(card5))
        break;
    }
    //dispatch(addcard(obj));
  }


  const handleApprove = (clicked: CartItemDetail) => {

  };
  const handleDecline = (clicked: CartItemDetail) => {

  };
  const addToCart = (clicked: CartItemDetail) => {

  };
  const decreaseAmount = (clicked: CartItemDetail) => {

  }
  function calculateTotal(items: any) {

    var totalprice: any = 0;
    items.forEach((element: CartItemDetail) => {

      totalprice = totalprice + (element.price * element.amount);

    });

    if (items[0]?.cart == 1) {
      dispatch(setTotal(totalprice))
    }
    if (items[0]?.cart == 2) {
      dispatch(setTotal2(totalprice))
    }
    if (items[0]?.cart == 3) {
      dispatch(setTotal3(totalprice))
    }
    if (items[0]?.cart == 4) {
      dispatch(setTotal4(totalprice))
    }
    if (items[0]?.cart == 5) {
      dispatch(setTotal5(totalprice))
    }
    return totalprice;
  }


  return (
    <Wrapper>
      <h2> Shopping Cart for Child {child + 1} </h2>

      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem item={item} decline={handleDecline} approve={handleApprove} key={item.id} addToCart={addToCart} removeFromCart={decreaseAmount} />
      ))}
      <h2>Total: {calculateTotal(cartItems)} EUR</h2>


      <button type="button" onClick={() => confirm(cartItems[0].cart)}>Confirm</button>
    </Wrapper>
  );
};

export default Cart;







