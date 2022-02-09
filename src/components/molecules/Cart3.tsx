import { useEffect, useState } from 'react'
import { Wrapper } from "../atoms/cart";
import React from 'react'
import { useAppSelector } from '../../app/hooks';
import Cart from './Cart';
import { CartItemDetail } from '../../App';
import CartItem from './CartItem';
import {useGetCartsQuery} from '../../features/CardsApi/cardsApiSlice';

const Cart3 = ()=> {
 
   
    const {data=[], isFetching,isSuccess}=useGetCartsQuery();
   
  const card3 = useAppSelector(state=>state.card3)
 
  const handleAddToCart = (clicked: CartItemDetail) => {

};

const decrease = (items: CartItemDetail) => {
};


const handleDecline = (clicked: CartItemDetail) => {

};
const handleApprove= (clicked:CartItemDetail)=>{

};


  return (
    <div className="Card3">
      <Wrapper>
      <h2> Shopping Cart for Child {3} </h2>

      {card3.products.length === 0 ? <p>No items in cart.</p> : null}
      {card3.products.map((item) => (
          <CartItem  item={item} key={item.id} approve={handleApprove} addToCart={handleAddToCart} removeFromCart={decrease} decline={handleDecline} />
          ))}
      <div>Total: {card3.total}  EUR</div>
      <button type="button" >Confirm</button>
    </Wrapper>
    </div>
  )
}

export default Cart3




