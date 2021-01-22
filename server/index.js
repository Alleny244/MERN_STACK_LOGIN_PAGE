const express=require('express');
const mongoose=require('mongoose');
const app=express();
var cors = require("cors");
require('dotenv').config()

const userRouter=require('./routes/user');
const loginRouter=require('./routes/login');

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URL,
{ useUnifiedTopology: true ,
 useNewUrlParser: true,
 useCreateIndex:true }
 )
const db=mongoose.connection;
db.on("error",error=>console.error)
db.once("open",open=>console.log("Database Connected"))



app.use('/users',userRouter);
app.use('/login',loginRouter);



const port=process.env.PORT || 3008;
app.get('/',(req,res)=>{
    res.send("Hello")
    console.log(`Server running on port ${port}`)
})
app.listen(port);



