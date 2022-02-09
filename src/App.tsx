import { useEffect, useState } from 'react'
import './App.css'
import {useAppDispatch,useAppSelector} from './app/hooks';
import {useGetProductsQuery} from './features/ProductsApi/productsApiSlice';
import { addProductToCardOne,replaceProducts, card1Success, removeProductFromCardOne } from './features/Cards/cardOneSlice';
import {addProductToCardTwo} from './features/Cards/cardTwoSlice';
import {addProductToCardThree} from './features/Cards/cardThreeSlice';
import {addProductToCardFour} from './features/Cards/cardFourSlice';
import cardFiveSlice, {addProductToCardFive} from './features/Cards/cardFiveSlice';
import {product} from './features/ProductsApi/productsApiSlice'
import Cart1 from './components/molecules/Cart1';
import Cart2 from './components/molecules/Cart2';
import Cart3 from './components/molecules/Cart3';
import Cart4 from './components/molecules/Cart4';
import Cart from './components/molecules/Cart';
import { useGetCartsQuery } from './features/CardsApi/cardsApiSlice';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { fetchCards } from './features/actions';
import { fetchProducts } from './features/actions';
import cardOneSlice from './features/Cards/cardOneSlice';

export interface Cart {
  id: number;
  date: string;
  products: CartItemDetail[];
  total:number;
};

export type CartItemDetail= {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  approved:boolean;
  card:string;
  rating:[any,any]
  
};

function App() {

  const dispatch=useAppDispatch();
  const card1 = useAppSelector(state=>state.reducer.card1)
  const card2 = useAppSelector(state=>state.reducer.card2)
  const card3 = useAppSelector(state=>state.reducer.card3)
  const card4 = useAppSelector(state=>state.reducer.card4)
  const card5 = useAppSelector(state=>state.reducer.card5)
const cards = useAppSelector(state=>state)




  return (
   
    <div className="App">
      <header className="App-header">
     
     
        <div>
      
          </div>
          <div>
         <p>Cart 1 date:{new Date(card1.date).toLocaleDateString()}</p>
          </div>
        <div> <Cart childId={0} date={new Date(card1.date).toLocaleDateString()} cartItems={card1.products} child={0}  /></div>
        <div>
         <p>Cart 2 date:{new Date(card2.date).toLocaleDateString()}</p>
          </div> 
        <div> <Cart childId={1} date={new Date(card2.date).toLocaleDateString()} cartItems={card2.products} child={1}  /></div> 
        <div>
         <p>Cart 3 date:{new Date(card3.date).toLocaleDateString()}</p>
          </div>
        <div> <Cart childId={2} date={new Date(card3.date).toLocaleDateString()} cartItems={card3.products} child={2}  /></div>
        <div>
         <p>Cart 4 date:{new Date(card4.date).toLocaleDateString()}</p>
          </div> 
        <div> <Cart childId={3} date={new Date(card4.date).toLocaleDateString()} cartItems={card4.products} child={3}  /></div> 
        <div>
         <p>Cart 5 date:{new Date(card5.date).toLocaleDateString()}</p>
          </div>
        <div> <Cart childId={4} date={new Date(card5.date).toLocaleDateString()} cartItems={card5.products} child={4}  /></div> 
       <div>

       </div>
     
      </header>
    </div>
  )
}

export default App




