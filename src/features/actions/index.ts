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
function applyDiscounts(card1: Cart,card2: Cart, card3: Cart, card4: Cart, card5: Cart) {
  
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
       

    }
 
});

}
function adjustGiftsToFavorite(products:CartItemDetail[],n:number)
{
   while(products.length>n)
   {
      products.pop();
   }
}

function adjustProducts(cartproducts: CartItemDetail[], normAmount: number, products: CartItemDetail[]) {
   
   while(cartproducts.length<normAmount)
    {
       var  item = products[Math.floor(Math.random()*products.length)];
       console.log(item )
       item.amount=1;
       var cart: number;
       for(var i=0; i <cartproducts.length;i++)
       {
           console.log(cartproducts[i])
           if(cartproducts[i].cart!==null)
           {
               cart=cartproducts[i].cart
           }
       }
       console.log(cart)
       item.cart=cart
       item.approved=false
     console.log(item)
         cartproducts.push(item)

    }
}

function checkAndModifyGifts(card1: Cart, card2: Cart, card3: Cart, card4: Cart, card5: Cart,products: []) {
  
//favorite child is the one having card1
var ar:number[]=[];
 ar.push(card1.products.length)
 ar.push(card2.products.length)
 ar.push(card3.products.length)
 ar.push(card4.products.length)
 ar.push(card5.products.length)
 var max= Math.max(...ar);

 if(card2.products.length==max)
 { 
    adjustGiftsToFavorite(card2.products,max-1)
    
 }
 if(card3.products.length==max)
 {
    adjustGiftsToFavorite(card3.products,max-1)
 }
 if(card4.products.length==max)
 {
    adjustGiftsToFavorite(card4.products,max-1)
 }
 if(card5.products.length==max)
 {
    adjustGiftsToFavorite(card5.products,max-1)
 }
 var aradjusted:number[]=[];
 aradjusted.push(card2.products.length)
 aradjusted.push(card3.products.length)
 aradjusted.push(card4.products.length)
 aradjusted.push(card5.products.length)
 var normAmount= Math.max(...aradjusted);

adjustProducts(card2.products,normAmount,products)
adjustProducts(card3.products,normAmount,products)
adjustProducts(card4.products,normAmount,products)
adjustProducts(card5.products,normAmount,products)
 
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

            applyDiscounts(card1,card2,card3,card4,card5);
            checkAndModifyGifts(card1,card2,card3,card4,card5,products.data);

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




