import React, { useEffect } from "react";
import { Wrapper } from "../atoms/cart";
import { ButtonWrapper } from "../atoms/button";
import CartItem from "./CartItem";
import { CartItemDetail } from "../../App";
import useForceUpdate from 'use-force-update';
import {saveCard,addcard} from '../../features/Cards/cardsSlice'
import { useAppDispatch } from "../../app/hooks";

type Props = {
  childId: number,
  date:string,
  cartItems: CartItemDetail[];
  increaseAmount:(clicked: CartItemDetail) => void;
  addToCart: (clicked: CartItemDetail) => void;
  decreaseAmount: (id: CartItemDetail) => void;
  child:number;
};

const Cart: React.FC<Props> = ({ cartItems,child }) => {

  const dispatch= useAppDispatch();

function confirm(obj:any)
{
  console.log(obj)
  dispatch(addcard(obj));

 //dispatch(saveCard(obj))
}


const handleApprove= (clicked:CartItemDetail)=>{

};
const handleDecline= (clicked:CartItemDetail)=>{

};
const addToCart= (clicked:CartItemDetail)=>{

};
const decreaseAmount=(clicked:CartItemDetail)=>{

}
function calculateTotal(items:any)
{ 

    var price: any=0;
 items.forEach((element: CartItemDetail) => {
 
     price=price+(element.price*element.amount);

 });
 
    return price;
}

  return  (
    <Wrapper>
      <h2> Shopping Cart for Child {child+1} </h2>

      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem  item={item} decline={handleDecline} approve={handleApprove} key={item.id}   addToCart={addToCart} removeFromCart={decreaseAmount} />
      ))}
      <h2>Total: {calculateTotal(cartItems)} EUR</h2>

      <button type="button"  onClick={() => confirm(cartItems)}>Confirm</button>
    </Wrapper>
  );
};

export default Cart;



