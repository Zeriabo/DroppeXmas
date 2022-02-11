import React, { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import IPage from './page'; 


const Results : React.FunctionComponent = props =>{
  const cards = useAppSelector(state=>state.reducer)
  useEffect(()=> {
    console.log(cards)
  },[]);

  return  <div className="Results">
    <div>
    <table border="1">
      <tbody>
        
        <tr>
          <th colSpan="2">Card date</th>
          <th colSpan="2">Child number</th>
          <th colSpan="2"> number of Products</th>
          <th colSpan="2">total</th>
          <th colSpan="2">Confirmed</th>
        </tr>
        <tr>
          <td colSpan="2">{cards.card1.date}</td>
          <td colSpan="2">{cards.card1.id}</td>
          <td colSpan="2">{cards.card1.products.length}</td>
          <td colSpan="2">{cards.card1.total}</td>
          <td colSpan="2">yes</td>
    
        </tr>
        <tr>
          <tr><strong>Products child {cards.card1.id} Card :</strong></tr>

        {cards.card1.products.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.category }</td>
          <td>{ item.title }</td>
          <td>{ item.price }</td>
          <td>{ (item.approved==true)?'Approved':'Not Approved' }</td>
        </tr>
      );
    })}
        </tr>
       
        <hr />



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
          <td colSpan="2">yes</td>
    
        </tr>
        <tr>
          <tr><strong>Products child {cards.card2.id} Card :</strong></tr>

        {cards.card2.products.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.category }</td>
          <td>{ item.title }</td>
          <td>{ item.price }</td>
          <td>{ (item.approved==true)?'Approved':'Not Approved' }</td>
        </tr>
      );
    })}
        </tr>
       
        <hr />
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
          <td colSpan="2">yes</td>
    
        </tr>
        <tr>
          <tr><strong>Products child {cards.card3.id} Card :</strong></tr>

        {cards.card3.products.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.category }</td>
          <td>{ item.title }</td>
          <td>{ item.price }</td>
          <td>{ (item.approved==true)?'Approved':'Not Approved' }</td>
        </tr>
        
      );
    })}
        </tr>
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
          <td colSpan="2">yes</td>
    
        </tr>
        <tr>
          <tr><strong>Products child {cards.card4.id} Card :</strong></tr>

        {cards.card4.products.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.category }</td>
          <td>{ item.title }</td>
          <td>{ item.price }</td>
          <td>{ (item.approved==true)?'Approved':'Not Approved' }</td>
        </tr>
      );
    })}
        </tr>
     

        <hr />
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
          <td colSpan="2">yes</td>
    
        </tr>
        <tr>
          <tr><strong>Products child {cards.card5.id} Card :</strong></tr>

        {cards.card5.products.map(item => {
      return (
        <tr key={item.id}>
          <td>{ item.category }</td>
          <td>{ item.title }</td>
          <td>{ item.price }</td>
          <td>{ (item.approved==true)?'Approved':'Not Approved' }</td>
        </tr>
      );
    })}
        </tr>
     
        <hr />
       
   
      </tbody>
    </table>

</div>

</div>

}
export default Results;