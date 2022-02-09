import { useEffect, useState } from 'react'
import { Wrapper } from "../atoms/cart";
import React from 'react'
import { addProductToCardOne } from '../../features/Cards/cardOneSlice';
import { useAppSelector } from '../../app/hooks';
import Cart from './Cart';
import { CartItemDetail } from '../../App';
import CartItem from './CartItem';
import { useGetCartsQuery } from '../../features/CardsApi/cardsApiSlice';


const Cart1 = ()=> {

 
 
  const card1 = useAppSelector(state=>state.card1)
console.log(card1)
  const handleAddToCart = (clicked: CartItemDetail) => {

  };

  const handleRemoveFromCart = (items: CartItemDetail) => {
  };

  const increaseAmount= (items: CartItemDetail) => {
 
};
const handleDecline = (clicked: CartItemDetail) => {

};
const handleApprove= (clicked:CartItemDetail)=>{

};


  return (
    <div className="Card1">
      <Wrapper>
      <h2> Shopping Cart for Child {1} </h2>

      {card1.products.length === 0 ? <p>No items in cart.</p> : null}
      {card1.products.map((item,index) => (
        <CartItem  item={item} key={index} approve={handleApprove} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} decline={handleDecline} />
      ))}
      <div>Total: {card1.total}  EUR</div>
     <div>
     
     <button type="button"  >Confirm</button>
     </div>
      
    </Wrapper>
    </div>
  )
}

export default Cart1





