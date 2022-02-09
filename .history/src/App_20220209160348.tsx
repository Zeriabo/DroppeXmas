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
import cardOneSlice,{} from './features/Cards/cardOneSlice';

export interface Cart {
  id: number;
  date: string;
  products: CartItemDetail[];
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
  rating:[any,any];
  cart:number
  
};
function fillProducts(cart:Cart, products:CartItemDetail[] )
{

  var newCart :Cart={
    id: cart.id,
    date: cart.date,
    products: []
  };
  const dispatch=useAppDispatch();
    console.log(cart)
    cart.products.forEach(
    (element) => {
     const found = products.find(function(elem,index)
     {
       return elem.id==element.productId
     });
  
    
  if(found)
  {
    var  pToInsert={
      id: found.id,
      amount : element.amount,
      price:  found.price,
      title: found.title,
      category: found.category,
      image: found.image,
      rating: found.rating,
      cart: 1,
      description: found.description,
      approved: false,
      card: 'cardOne'
}

newCart.products.push(pToInsert);
  }

});
//dispatch(replaceProducts(newCart.products))

 return newCart;

}
function App() {

  const dispatch=useAppDispatch();
  var cards =[]
  useEffect(() => {
     cards = useAppSelector(state=>state)
  });


console.log(cards.reducer.card1)
 var p1: any =[];

 var cart1:Cart=cards.reducer.card1
// var cart2:Cart=cards.reducer.card2
// var cart3:Cart=cards.reducer.card3
// var cart4:Cart=cards.reducer.card4
// var cart5:Cart=cards.reducer.card5
var products= cards.reducer.products

 var firstCart:Cart =   fillProducts(cart1,products as [])
//  var secondCart:Cart= fillProducts(cart2,products as [])
//  var thirdCart:Cart= fillProducts(cart3,products as [])
//  var fourthCart:Cart= fillProducts(cart4,products as [])
//  var fifthCart:Cart= fillProducts(cart5,products as [])
console.log(cart1)
 console.log(firstCart)

 //dispatch(replaceProducts(firstCart.products))
//  console.log(secondCart)
//  console.log(thirdCart)
//  console.log(fifthCart)
//  console.log(fourthCart)


console.log(cards.reducer.card1.products)
// if(products.isSuccess){

//   var pToInsert:CartItemDetail;
//   var cartone:Cart={
//     id: null,
//     date:null,
//     products: []
//   };
//   var carttwo:Cart={
//     id: null,
//     date:null,
//     products: []
//   };
//   var cartthree:Cart={
//     id: null,
//     date:null,
//     products: []
//   };
//   var cartfour:Cart={
//     id: null,
//     date:null,
//     products: []
//   };
//   var cartfive:Cart={
//     id: null,
//     date:null,
//     products: []
//   };
//   cartone.date=cart1.date;
//   cartone.id=cart1.id
//   dispatch(fillCard1);
//  function fillCard1(){
//   cart1.products.forEach(
//     (element) => {
//      const found = products.data.find(function(elem,index)
//      {
//        return elem.id==element.productId
//      })
     
//      pToInsert={
//       id: found.id,
//       amount : element.quantity,
//       price:  found.price,
//       title: found.title,
//       category: found.category,
//       image: found.image,
//       rating: [found.rating.rate, found.rating.count],
//       cart: 1,
//       description: found.description,
//       approved: false,
//       card: 'cardOne'
//     } 
//  console.log(pToInsert)
  
   
// //    cartone.products.push(pToInsert);



// //     });

// //  }
   
// // fillCard1();



//     carttwo.date=cart1.date;
//     cartone.id=cart1.id
//     cart1.products.forEach(
//       (element) => {
//        const found = products.data.find(function(elem,index)
//        {
//          return elem.id==element.productId
//        })
       
//        pToInsert={
//         id: found.id,
//         amount : element.quantity,
//         price:  found.price,
//         title: found.title,
//         category: found.category,
//         image: found.image,
//         rating: [found.rating.rate, found.rating.count],
//         cart: 1,
//         description: found.description,
//         approved: false,
//         card: 'cardTwo'
//       } 
   
     
//       dispatch(addProductToCardTwo(pToInsert));
 
//       });
//       cartthree.date=cart3.date;
//       cartthree.id=cart3.id
//       cart3.products.forEach(
//         (element) => {
//          const found = products.data.find(function(elem,index)
//          {
//            return elem.id==element.productId
//          })
         
//          pToInsert={
//           id: found.id,
//           amount : element.quantity,
//           price:  found.price,
//           title: found.title,
//           category: found.category,
//           image: found.image,
//           rating: [found.rating.rate, found.rating.count],
//           cart: 1,
//           description: found.description,
//           approved: false,
//           card: 'cardthree'
//         } 
     
       
//         dispatch(addProductToCardThree(pToInsert));
    
//         });
//         cartfour.date=cart4.date;
//         cartfour.id=cart4.id
//         cart4.products.forEach(
//           (element) => {
//            const found = products.data.find(function(elem,index)
//            {
//              return elem.id==element.productId
//            })
           
//            pToInsert={
//             id: found.id,
//             amount : element.quantity,
//             price:  found.price,
//             title: found.title,
//             category: found.category,
//             image: found.image,
//             rating: [found.rating.rate, found.rating.count],
//             cart: 1,
//             description: found.description,
//             approved: false,
//             card: 'cardOne'
//           } 
       
         
//           dispatch(addProductToCardFour(pToInsert));
       
//           });
          
//           cartfive.date=cart5.date;
//           cartfive.id=cart5.id
//           cart5.products.forEach(
//             (element) => {
//              const found = products.data.find(function(elem,index)
//              {
//                return elem.id==element.productId
//              })
             
//              pToInsert={
//               id: found.id,
//               amount : element.quantity,
//               price:  found.price,
//               title: found.title,
//               category: found.category,
//               image: found.image,
//               rating: [found.rating.rate, found.rating.count],
//               cart: 5,
//               description: found.description,
//               approved: false,
//               card: 'cardFive'
//             } 
         
           
//             dispatch(addProductToCardFive(pToInsert));
       
//             });

           
              
// }




// useEffect(() => {
//   products1.map((p)=>{

//     var pToInsert:CartItemDetail={
//       id: p.id,
//       amount: 1,
//       price: p.price,
//       title: p.title,
//       category: p.category,
//       image: p.image,
//       rating: [p.rating.rate, p.rating.count],
//       cart: 1,
//       description: '',
//       approved: false,
//       card: ''
//     }
//   dispatch(addProductToCardOne(pToInsert));
//   });
//   products2.map((p)=>{

//     var pToInsert:CartItemDetail={
//       id: p.id,
//       amount: 1,
//       price: p.price,
//       title: p.title,
//       category: p.category,
//       image: p.image,
//       rating: [p.rating.rate, p.rating.count],
//       cart: 2,
//       description: '',
//       approved: false,
//       card: ''
//     }
//   dispatch(addProductToCardTwo(pToInsert));
//   })
//   products3.map((p)=>{

//     var pToInsert:CartItemDetail={
//       id: p.id,
//       amount: 1,
//       price: p.price,
//       title: p.title,
//       category: p.category,
//       image: p.image,
//       rating: [p.rating.rate, p.rating.count],
//       cart: 3,
//       description: '',
//       approved: false,
//       card: ''
//     }
//   dispatch(addProductToCardThree(pToInsert as any));
//   })
//   products4.map((p)=>{

//     var pToInsert:CartItemDetail={
//       id: p.id,
//       amount: 1,
//       price: p.price,
//       title: p.title,
//       category: p.category,
//       image: p.image,
//       rating: [p.rating.rate, p.rating.count],
//       cart: 4,
//       description: '',
//       approved: false,
//       card: ''
//     }
//   dispatch(addProductToCardFour(pToInsert));
//   })
  
//   products5.map((p)=>{

//     var pToInsert:CartItemDetail={
//       id: p.id,
//       amount: 1,
//       price: p.price,
//       title: p.title,
//       category: p.category,
//       image: p.image,
//       rating: [p.rating.rate, p.rating.count],
//       cart: 5,
//       description: '',
//       approved: false,
//       card: ''
//     }
//   dispatch(addProductToCardFive(pToInsert));
//   })
// });



  return (
   
    <div className="App">
      <header className="App-header">
     
     
        <div>
      
          </div>
          <div>
         <p>byeje el deep</p>
         <p>Cart 1 date:{new Date(cart1.date).toLocaleDateString()}</p>
          </div>
        <div> <Cart childId={0} date={new Date(cart1.date).toLocaleDateString()} cartItems={firstCart.products} child={0}  /></div> 
       <div>

       </div>
     
      </header>
    </div>
  )
}

export default App




