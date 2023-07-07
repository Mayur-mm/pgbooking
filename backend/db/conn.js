const mongoose=require("mongoose");
require('dotenv').config()

const DATA_BASE=process.env.DATABASE;
mongoose.connect(`mongodb://localhost:27017/pgRegistration`).then(()=>{
    console.log(`Connection Succesful..`)
}).catch((e)=>{
    console.log(`no Connection..`)
})