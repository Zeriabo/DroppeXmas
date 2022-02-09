import React from "react";
import { CartItemDetail } from "../../App";
import { Wrapper } from "../atoms/cartItem";
import { ButtonWrapper } from "../atoms/button";
import useForceUpdate from 'use-force-update';
import {useAppDispatch,useAppSelector} from '../../app/hooks';
import { IncrementAmountOne ,decreaseAmountOne,Approve,Decline,calcTotal,calcTotalDecrement} from "../../features/Cards/cardOneSlice";
import { IncrementAmountTwo ,decreaseAmountTwo,ApproveTwo, calcTotalCard2,calcTotalCard2Decrement} from "../../features/Cards/cardTwoSlice";
import { addProductToCardFive, removeProductFromCardFive,IncrementAmountFive,decreaseAmountFive,calcCard5Total,calcTotalCard5Decrement } from "../../features/Cards/cardFiveSlice";
import  { addProductToCardFour, removeProductFromCardFour,IncrementAmountFour,calcCard4Total,calcTotalCard4Decrement,decreaseAmountFour } from "../../features/Cards/cardFourSlice";
import { addProductToCardThree, IncrementAmountThree,calcTotalCard3,calcTotalCard3Decrement, decreaseAmountThree ,decrementAmountThree}  from '../../features/Cards/cardThreeSlice';
import { DECREASE_AMOUNT, ICREMENT_ITEM } from "../../features/Cards/types";
//here
type Props = {
  item: CartItemDetail;
 
  addToCart: (clicked: CartItemDetail) => void;
  
  removeFromCart: (clicked: CartItemDetail) => void;

  approve:(clicked:CartItemDetail)=>void;

  decline:(clicked:CartItemDetail)=>void;
    
};

const CartItem: React.FC<Props> = ({ item }) => { 
   const forceUpdate = useForceUpdate();
   const dispatch= useAppDispatch();
 
   React.useEffect(() => {
   
    if(item.cart==1)
    {
      dispatch(calcTotal(item))
    }
    if(item.cart==2)
    {
      dispatch(calcTotalCard2(item))
    }
    if(item.cart==3)
    {
      dispatch(calcTotalCard3({item}))
    }
    if(item.cart==4)
    {
      dispatch(calcCard4Total(item))
    }
  }, []);   

   const decline = React.useCallback((item) => {
   
    dispatch(Decline(item));
  
 
     forceUpdate();
   }, [forceUpdate]);
   const approve = React.useCallback((item) => {

    if(item.cart==1)
    {
      dispatch(Approve(item));
    }
    if(item.cart==2)
    {
      dispatch(ApproveTwo(item))
    }
    

    forceUpdate();
  }, [forceUpdate]);

const increaseAmount= React.useCallback((item) => {
  console.log(item.cart)
  if(item.cart==1)
 {
  dispatch(IncrementAmountOne(item));
  dispatch(calcTotal(item))
 }
  if(item.cart==2)
 {
   
   dispatch(IncrementAmountTwo(item))
   dispatch(calcTotalCard2(item))
 }
 if(item.cart==3)
 {
   dispatch(IncrementAmountThree(item))
   dispatch(calcTotalCard3(item))
 }

}, [forceUpdate]);
const decreaseAmount= React.useCallback((item) => {
  console.log(item)
  switch(item.cart){
    case 1:
      if(item.amount>0){
        dispatch(decreaseAmountOne(item))
        dispatch(calcTotalDecrement(item))
       }
       case 2:
        if(item.amount>0){
          dispatch(decreaseAmountTwo(item))
          dispatch(calcTotalCard2Decrement(item))
         } 
      
      case 3:
        {
          if(item.amount>0){
          dispatch(decrementAmountThree(item))
          dispatch(calcTotalCard3(item))
          }
        }
       case 4 :
         {
          if(item.amount>0){
          dispatch(decreaseAmountFour(item))
          dispatch(calcCard4Total(item))
          }
         }
         case 5:
           {
            if(item.amount>0){
            dispatch(decreaseAmountFive(item))
            dispatch(calcCard5Total(item))
            }
           }
  }
  
 
  forceUpdate();
}, [forceUpdate]);
  const removeFromCart = React.useCallback(() => {
   item.approved=false;
   forceUpdate();
 }, [forceUpdate]);
    return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="info">
        <p>Amount: {item.amount} </p>
          <p>Price: {item.price} EUR</p>
          <p>Total: {( item.price *item.amount ).toFixed(2)} EUR</p>
        </div>
        <div className="buttons">
      
          <button  onClick={() => decline(item)}>
            Decline
          </button>
       
   
         
          
          <button  onClick={() => increaseAmount(item)}>
            Increase amount
          </button>
      
          <button  onClick={() => decreaseAmount(item)}>
            Decrease amount
          </button>
        
          <button  onClick={() => approve(item)}>
            Approve
          </button>
        
        </div>
       
      </div>
      <img src={item.image} alt="" />
    </Wrapper>
  );
};

export default CartItem;
