const express =require('express');
const router = express.Router();
const pizzaModel =require ('../models/pizzaModel');
const stripe = require("stripe") (process.env.STRIPE_SECRET)

//GEt all pizza
router.get('/getallpizzas',async(req,res)=>{
    try{
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);
    }catch(error){
       res.json({message:error})
    }
}

);

router.post("/create-checkout-session", async(req,res)=>{
    const {products} =req.body;
    const lineitems =products.map((products)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:products.name,
                images:[products.image]
            },
            unit_amount:Math.round( products.price*100),
        },
       quantity:products.quantity

    }));
    const session =await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineitems,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel",
    });
    res.json({id:session.id});
    })





module.exports =router



