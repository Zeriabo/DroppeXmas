import { useEffect, useState } from 'react'
import { Wrapper } from "../atoms/cart";
import React from 'react'
import { useAppSelector } from '../../app/hooks';
import Cart from './Cart';
import { CartItemDetail } from '../../App';
import CartItem from './CartItem';

const Cart2 = ()=> {
 

  const card2 = useAppSelector(state=>state.card2)

  const handleAddToCart = (clicked: CartItemDetail) => {

};

const decrease = (items: CartItemDetail) => {
};

const increaseAmount= (items: CartItemDetail) => {

};
const handleDecline = (clicked: CartItemDetail) => {

};
const handleApprove= (clicked:CartItemDetail)=>{

};
// const confirm=(card:Car) =>{

// }

  return (
    <div className="Card2">
      <Wrapper>
      <h2> Shopping Cart for Child {2} </h2>

      {card2.products.length === 0 ? <p>No items in cart.</p> : null}
      {card2.products.map((item) => (
          <CartItem  item={item} key={item.id} approve={handleApprove} addToCart={handleAddToCart} removeFromCart={decrease} decline={handleDecline} />
          ))}
      <div>Total: {card2.total}  EUR</div>
      <button type="button" >Confirm</button>
    </Wrapper>
    </div>
  )
}

export default Cart2




