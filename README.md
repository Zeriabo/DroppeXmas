# DroppeXmas🎄
A React app which pulls 5 carts from the API and pulls suitable amount of products and fill the carts with the products details, And adjust them in a way that the favorite child which is child one will get more gifts than the others, The code forces the rest of children to get an equal gifts, The code is designed in an atomic design way, And calls the API's in way that it wont effect the efficiency of the program, After the carts finished fetching the code will adjust and fill the carts with products and apply the discounts if needed, the state is managed by Redux store, After the user will be able to see the (carts, gifts, amount of gifts, total per each cart, prices of the gifts), The user will be able to adjust the quatities and remove gifts either by setting amount to ZERO or to decline the gift, The user must approve each item gift that he wants to buy he can decline after if he changed his mind, He must also approve the whole cart to get it in the bill, gifts items that aren't approved they are not included in the bill. After sending the data  a list of approved items and declined item will be saved to the API, The use will be able to see the approved and the declined items with their quantites and prices and the code will calculate the total amount to be paid.

Technologies used: React, typescript, redux, CSS. 
Feel free to see the code on the master branch.

The App is deloyed on netlify [Link to App](http://droppexmass.netlify.app/)

run it on local machine by :
npm install
npm run dev
