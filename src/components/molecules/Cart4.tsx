import { useEffect, useState } from 'react'
import { Wrapper } from "../atoms/cart";
import React from 'react'
import { addProductToCardTwo } from '../../features/Cards/cardTwoSlice';
import { useAppSelector } from '../../app/hooks';
import Cart from './Cart';
import { CartItemDetail } from '../../App';
import CartItem from './CartItem';
import { useGetCartsQuery } from '../../features/CardsApi/cardsApiSlice';

const Cart4 = ()=> {
 
    const {data=[], isFetching,isSuccess}=useGetCartsQuery();
  const card4 = useAppSelector(state=>state.card4)

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
    <div className="Card4">
      <Wrapper>
      <h2> Shopping Cart for Child {4} </h2>

      {card4.products.length === 0 ? <p>No items in cart.</p> : null}
      {card4.products.map((item) => (
          <CartItem  item={item} key={item.id} approve={handleApprove} addToCart={handleAddToCart} removeFromCart={decrease} decline={handleDecline} />
          ))}
      <div>Total: {card4.total}  EUR</div>
      <button type="button" >Confirm</button>
    </Wrapper>
    </div>
  )
}

export default Cart4




