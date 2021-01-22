const express=require('express');
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
           type:String,
           required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        sparse:true
 },
 password:{
    type:String,
    required:true
},
date:{
    type:Date,
    required:true,
    default:Date.now
},
});

module.exports=mongoose.model("userlists",userSchema)