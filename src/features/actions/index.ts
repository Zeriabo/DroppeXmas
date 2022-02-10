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
function calculateTotal(cart:Cart)
{
  return cart.products.reduce((a, b) => a + b.price, 0);
}
function checkDiscounts(card1: Cart,card2: Cart, card3: Cart, card4: Cart, card5: Cart) {
  
var products: CartItemDetail[] = card1.products.concat(card2.products).concat(card3.products).concat(card4.products).concat(card5.products)

var productsUnique : CartItemDetail[]=Object.values(products.reduce((acc,cur)=>Object.assign(acc,{[cur.id]:cur}),{}))



var resultToReturn = productsUnique.filter((element, index) => {
    var count: number=0;
  products.forEach((p)=>{
        if(p.id==element.id)
        {
            count++;
        }
        
    }
   
    )
 
    if(count>1)
    {
        var o =(count*10)
    }
    if(o>=20)
    {
        
        console.log(element)
        products.forEach((product)=>{
            if(product.id==element.id)
            {
              var sum =  product.price+element.price;
              var percentage=100-o
              sum = (sum*percentage/100)/2;
               if(product.price!=sum)
               {
                   product.price=sum
               }
            }
        })
       
    //  var   objIndex = products.findIndex((obj => obj.id == element.id));
    
    //  console.log(products[objIndex])
    }
    console.log(element.title,count) 
});

console.log(resultToReturn)
}

function fillProducts(cart:Cart, products:CartItemDetail[] )
{

  var newCart :Cart={
      id: cart.id,
      date: cart.date,
      products: [],
      total: 0
  };
var total:number=0;

    
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
      cart: cart.id,
      description: found.description,
      approved: false
}

newCart.products.push(pToInsert);
  }

});
//dispatch(replaceProducts(newCart.products))

total =calculateTotal(newCart)
newCart.total=total;
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

            checkDiscounts(card1,card2,card3,card4,card5)

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



