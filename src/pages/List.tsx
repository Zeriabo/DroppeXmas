import { useEffect, useState } from 'react'
import '../App.css'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Cart from '../components/molecules/Cart';
import { useNavigate } from 'react-router-dom';




export interface Cart {
  id: number;
  date: string;
  products: CartItemDetail[];
  total: number;
};

export type CartItemDetail = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  approved: boolean;
  cart: number;
  rating: [any, any]

};

function List() {

  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const card1 = useAppSelector(state => state.reducer.card1)
  const card2 = useAppSelector(state => state.reducer.card2)
  const card3 = useAppSelector(state => state.reducer.card3)
  const card4 = useAppSelector(state => state.reducer.card4)
  const card5 = useAppSelector(state => state.reducer.card5)
  const cards = useAppSelector(state => state)
  const [isPending, setIsPending] = useState(false)

  function sendData() {

    var approvedCarts: Cart[] = [];
    var declinedCarts: Cart[] = [];
    const ar: Cart[] = cards.reducer.cards

    ar.forEach((cart) => {
      approvedCarts.push(cart)
    })


    Object.values(cards.reducer).forEach(val => {
      if (!approvedCarts.includes(val) && !Array.isArray(val)) {
        declinedCarts.push(val)
      }
    });

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    };

    declinedCarts.forEach((cart) => {
      var prods = JSON.stringify(cart.products)
      fetch('https://fakestoreapi.com/carts', {
        method: requestOptions.method,
        body: JSON.stringify(
          {
            prods
          }
        )
      }
      ).then(console.log("declined Cards pushed"))

    })
    approvedCarts.forEach((cart) => {
      var prods = JSON.stringify(cart.products)
      fetch('https://fakestoreapi.com/carts', {
        method: requestOptions.method,
        body: JSON.stringify(
          {
            prods
          }
        )
      }
      ).then(setIsPending('false'))
        .then(navigate("/result"));
    })
    //   .then(res=>res.json())


    /// .then(setIsPending('false'))
    ///.then(navigate("/result")); 
  }

  return (

    <div className="App">

      <header className="App-header">


        <div>

        </div>
        <div>
          <p>Cart 1 date:{new Date(card1.date).toLocaleDateString()}</p>
        </div>
        <div> <Cart childId={0} date={new Date(card1.date).toLocaleDateString()} cartItems={card1.products} child={0} increaseAmount={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} addToCart={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} decreaseAmount={function (id: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} /></div>
        <div>
          <p>Cart 2 date:{new Date(card2.date).toLocaleDateString()}</p>
        </div>
        <div> <Cart childId={1} date={new Date(card2.date).toLocaleDateString()} cartItems={card2.products} child={1} increaseAmount={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} addToCart={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} decreaseAmount={function (id: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} /></div>
        <div>
          <p>Cart 3 date:{new Date(card3.date).toLocaleDateString()}</p>
        </div>
        <div> <Cart childId={2} date={new Date(card3.date).toLocaleDateString()} cartItems={card3.products} child={2} increaseAmount={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} addToCart={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} decreaseAmount={function (id: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} /></div>
        <div>
          <p>Cart 4 date:{new Date(card4.date).toLocaleDateString()}</p>
        </div>
        <div> <Cart childId={3} date={new Date(card4.date).toLocaleDateString()} cartItems={card4.products} child={3} increaseAmount={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} addToCart={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} decreaseAmount={function (id: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} /></div>
        <div>
          <p>Cart 5 date:{new Date(card5.date).toLocaleDateString()}</p>
        </div>
        <div> <Cart childId={4} date={new Date(card5.date).toLocaleDateString()} cartItems={card5.products} child={4} increaseAmount={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} addToCart={function (clicked: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} decreaseAmount={function (id: CartItemDetail): void {
          throw new Error('Function not implemented.');
        }} /></div>
        <div>

        </div>
        <div>

          {!isPending && <button type="button" onClick={() => sendData()}>Send data</button>}
          {isPending && <button type="button" disabled onClick={() => sendData()}>Sending data...</button>}

        </div>

      </header>

      <div>

      </div>
    </div>
  )
}

export default List




