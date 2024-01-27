const mongoose=require('mongoose')
const dotenv=require('dotenv')
require('colors')
const pizza =require('./models/pizzaModel')

const pizzas =require('./data/pizza-data')
const connectDB =require('./config/config')

dotenv.config()
connectDB();
const importData = async () => {
    try {
        await pizza.deleteMany({});
        const sampledata= pizzas.map(pizza=>{return{...pizza}})
        await pizza.insertMany(sampledata);
        console.log('Data Import Success'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(  `Error with data import ${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2]=='-d'){
    destroyData()
}else{
    importData()
}
const destroyData = async () => {
    try {
        await pizza.deleteMany({});
        console.log('Data Destroyed'.red.inverse);
        process.exit();
    } catch (error) {
        console.error('Error with data import'.red.inverse);
        process.exit(1);
    }
}
