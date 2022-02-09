import axios from 'axios'
import { useAppDispatch } from '../../app/hooks'
import {card1Success,initiateState} from '../Cards/cardOneSlice'
import {card2Success} from '../Cards/cardTwoSlice'
import {card3Success} from '../Cards/cardThreeSlice'
import { card4Success } from '../Cards/cardFourSlice'
import { card5Success } from '../Cards/cardFiveSlice'
import { productsSuccess } from '../Products/productsSlice'
import { Cart, CartItemDetail } from '../../App'
const fetchCardsSuccess = (cards: any) => ({
    type: 'FETCH_CARDS',
    payload: { cards }
})

const fetchProductsSuccess = (products: any) => ({
    type: "FETCH_PRODUCTS",
    payload: { products }
})
function fillProducts(cart:Cart, products:CartItemDetail[] )
{

  var newCart :Cart={
      id: cart.id,
      date: cart.date,
      products: [],
      total: 0
  };
var total:number=0;
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
      amount : 1,
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
total+=found.price
newCart.products.push(pToInsert);
  }
newCart.total=total;
});
//dispatch(replaceProducts(newCart.products))


 return newCart;

}
export const fetchCards =  () => {
    return async (dispatch: (arg0: { type: string; payload: { cards: any } }) => void) => {
        try {
            let cards = await axios.get('https://fakestoreapi.com/carts?limit=5')
            let products = await axios.get('https://fakestoreapi.com/products?limit=30')
           
            dispatch(fetchCardsSuccess(cards.data)) //store first five cards
            var card1= fillProducts(cards.data[0],products.data)

            var card2= fillProducts(cards.data[1],products.data)
            var card3= fillProducts(cards.data[2],products.data)
            var card4= fillProducts(cards.data[3],products.data)
            var card5= fillProducts(cards.data[4],products.data)

             dispatch(card1Success(card1) )
         

             dispatch(card2Success(card2))
             dispatch(card3Success(card3))
             dispatch(card4Success(card4))
             dispatch(card5Success(card5))
             
        }
        catch(e){
            console.log(e)
        }

      
    }
}

export const fetchProducts =  () => {
    return async (dispatch: (arg0: { type: string; payload: { products: any } }) => void) => {
        try {
            let products = await axios.get('https://fakestoreapi.com/products?limit=30')
            dispatch(fetchProductsSuccess(products.data)) 
            dispatch(productsSuccess(products.data))
        }
        catch(e){
            console.log(e)
        }
    }
}
