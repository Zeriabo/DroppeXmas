import React, { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { Cart, CartItemDetail } from './List';
import IPage from './page';


const Results: React.FunctionComponent = props => {
  const cards = useAppSelector(state => state.reducer)

  function checkCardIfApproved(cardToBeChecked: { date?: string; id: any; products?: CartItemDetail[]; userId?: number; total?: number; }) {
    var bool = false

    cards.cards.forEach((card) => {
      if (card.id == cardToBeChecked.id) {
        bool = true
      }
    })
    return bool;
  }
  function getTotalToPay() {
    var totalToPay: number = 0;
    var products = [];
    var approvedCarts = [];

    if (checkCardIfApproved(cards.card1)) {
      approvedCarts.push(cards.card1)
    }
    if (checkCardIfApproved(cards.card2)) {
      approvedCarts.push(cards.card2)
    }
    if (checkCardIfApproved(cards.card3)) {
      approvedCarts.push(cards.card3)
    }
    if (checkCardIfApproved(cards.card4)) {
      approvedCarts.push(cards.card4)
    }
    if (checkCardIfApproved(cards.card5)) {
      approvedCarts.push(cards.card5)
    }

    approvedCarts.forEach((cart: Cart) => {
      products.push(cart.products)
    })

    products.forEach((product) => {
      product.forEach((element) => {
        if (element.approved)
            
          totalToPay += element.price * element.amount
      })



    })
    return totalToPay;
  }
  return <div className="Results">
    <div>
      <table border="1">
        <tbody>

          <tr>
            <th colSpan="2">Card date</th>
            <th colSpan="2">Child number</th>
            <th colSpan="2"> Number of Products</th>
            <th colSpan="2">Total items prices</th>
            <th colSpan="2">Confirmed</th>
          </tr>
          <tr>
            <td colSpan="2">{cards.card1.date}</td>
            <td colSpan="2">{cards.card1.id}</td>
            <td colSpan="2">{cards.card1.products.length}</td>
            <td colSpan="2">{cards.card1.total}</td>
            <td colSpan="2" >{

              (cards.cards.map((e) => {

                if (parseInt(e.id) === 1) {
                  return "confirmed"
                }


              }))
            }</td>


          </tr>
          <tr><td><b>Products child {cards.card1.id} Card :</b></td></tr>

          {cards.card1.products.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{(item.approved == true) ? 'Approved' : 'Not Approved'}</td>
              </tr>
            );
          })}






          <tr>
            <th colSpan="2">Card date</th>
            <th colSpan="2">Child number</th>
            <th colSpan="2"> number of Products</th>
            <th colSpan="2">total</th>
            <th colSpan="2">Confirmed</th>
          </tr>
          <tr>
            <td colSpan="2">{cards.card2.date}</td>
            <td colSpan="2">{cards.card2.id}</td>
            <td colSpan="2">{cards.card2.products.length}</td>
            <td colSpan="2">{cards.card2.total}</td>
            <td colSpan="2" >{

              (cards.cards.map((e) => {

                if (parseInt(e.id) === 2) {
                  return "confirmed"
                }


              }))
            }</td>

          </tr>
          <tr><td><b>Products child {cards.card2.id} Card :</b></td></tr>

          {cards.card2.products.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{(item.approved == true) ? 'Approved' : 'Not Approved'}</td>
              </tr>
            );
          })}



          <tr>
            <th colSpan="2">Card date</th>
            <th colSpan="2">Child number</th>
            <th colSpan="2"> number of Products</th>
            <th colSpan="2">total</th>
            <th colSpan="2">Confirmed</th>
          </tr>
          <tr>
            <td colSpan="2">{cards.card3.date}</td>
            <td colSpan="2">{cards.card3.id}</td>
            <td colSpan="2">{cards.card3.products.length}</td>
            <td colSpan="2">{cards.card3.total}</td>
            <td colSpan="2" >{

              (cards.cards.map((e) => {

                if (parseInt(e.id) === 3) {
                  return "confirmed"
                }


              }))
            }</td>

          </tr>
          <tr><td><b>Products child {cards.card3.id} Card :</b></td></tr>

          {cards.card3.products.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{(item.approved == true) ? 'Approved' : 'Not Approved'}</td>
              </tr>

            );
          })}

          <tr>
            <th colSpan="2">Card date</th>
            <th colSpan="2">Child number</th>
            <th colSpan="2"> number of Products</th>
            <th colSpan="2">total</th>
            <th colSpan="2">Confirmed</th>
          </tr>
          <tr>
            <td colSpan="2">{cards.card4.date}</td>
            <td colSpan="2">{cards.card4.id}</td>
            <td colSpan="2">{cards.card4.products.length}</td>
            <td colSpan="2">{cards.card4.total}</td>
            <td colSpan="2" >{

              (cards.cards.map((e) => {

                if (parseInt(e.id) === 4) {
                  return "confirmed"
                }


              }))
            }</td>
          </tr>

          <tr><td><b>Products child {cards.card4.id} Card :</b></td></tr>

          {cards.card4.products.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{(item.approved == true) ? 'Approved' : 'Not Approved'}</td>
              </tr>
            );
          })}




          <tr>
            <th colSpan="2">Card date</th>
            <th colSpan="2">Child number</th>
            <th colSpan="2"> number of Products</th>
            <th colSpan="2">total</th>
            <th colSpan="2">Confirmed</th>
          </tr>
          <tr>
            <td colSpan="2">{cards.card5.date}</td>
            <td colSpan="2">{cards.card5.id}</td>
            <td colSpan="2">{cards.card5.products.length}</td>
            <td colSpan="2">{cards.card5.total}</td>
            <td colSpan="2" >{

              (cards.cards.map((e) => {

                if (parseInt(e.id) === 5) {
                  return "confirmed"
                }


              }))
            }</td>
          </tr>


          <tr><td><b>Products child {cards.card5.id} Card :</b></td></tr>

          {cards.card5.products.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{(item.approved == true) ? 'Approved' : 'Not Approved'}</td>
              </tr>
            );
          })}


          <tr>
            <td>
              <p>Total to pay : {getTotalToPay()}</p>
            </td>
          </tr>

        </tbody>
      </table>

    </div>

  </div>

}
export default Results;


