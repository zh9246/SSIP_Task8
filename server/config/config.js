const mongoose = require('mongoose')
require('colors')

const dbConnection = async() => {
    try {
        const url = process.env.MONGO_URI
       const conn= await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
        console.log(`DB Online  ${conn.connection.host}`.green)
    } catch (error) {
        console.log(`Error ${error.message}`.red)
       
    }
};
module.exports = dbConnection;