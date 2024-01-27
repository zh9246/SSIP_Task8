export const addtocart =(pizza, quantity, variant)=>{
        var cartitems ={
            name:pizza.name,
            _id:pizza._id,
            image:pizza.image,
            variant:variant,
            quantity:Number(quantity),
            prices:pizza.prices,
            price:pizza.prices[0][variant]*quantity
        };
        dispatchEvent({type:"ADD_TO_CART", payload:cartitems});

    }

