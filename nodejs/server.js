const express=require('express')
const db=require('mongoose');
const app=express();
require('dotenv').config()
const router=require("./Roter/router")

app.use(express.json());
app.use(router)
app.listen(process.env.PORT,(err)=>{
 if(err){
     console.log(err);
 }else{
     console.log("your are connected on Port"+process.env.PORT)
 }
})

db.connect(process.env.DB,{},(err)=>{
if(err)
{console.log(err)}
else{console.log("db connect")}
})