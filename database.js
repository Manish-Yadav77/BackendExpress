 const mongoose = require('mongoose')

require('dotenv').config();

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
        )
        console.log("database connected successfully");
        
    } catch (error) {
        console.log(error);        
        console.log('an error occured');
    }
}

module.exports=connectDB;