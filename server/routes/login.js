const express=require('express');
const app=express();
require('dotenv').config();
const router=express.Router();
const User=require('../models/userlists');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const auth=require('../middleware/auth');
var path = require('path');


router.post('/', (req,res)=>{
    
   
        const {email,password}=req.body;
    if(!password || !email){
        res.status(400).send(
            "Please fill out all the required fields"
        );
    }
    User.findOne({email:email}).then(
        us=>{
            if(!us){
            res.status(400).send(
                "User does not exist !Please register"
            );
        }
        bcrypt.compare(password,us.password).then(isMatch=>{
            if(!isMatch){
               return  res.status(400).send(
                    "Invalid Credentials"
                )
            }
            jwt.sign(
                {
                id:us.id
            },process.env.jwtSecret,{expiresIn:6000},(err,token)=>{
                if(err)throw err;
                res.status(201).json({token,
                    use:{
                        id:us.id,
                        name:us.name,
                        email:us.email
                    }
                   
                })

            })
        }).catch(err=>console.log(err))
    }
    )
    


       
    

})
router.get('/',auth,(req,res)=>{
    
    User.findById(req.user.id).select('-password').then(u=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(u);
    }).catch(err=>console.log(err))
})

module.exports=router;