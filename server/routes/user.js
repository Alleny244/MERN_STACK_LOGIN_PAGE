const express=require('express');
const app=express();
require('dotenv').config();
const router=express.Router();
const User=require('../models/userlists');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

router.post('/', async(req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
        const {name,email,password}=req.body;
    if(!name || !password || !email){
        res.status(400).send(
            "Please fill out all the required fields"
        );
    }
    User.findOne({email:email}).then(
        us=>{if(us){
             return res.status(400).send(
                "User already exists"
            )
        }
    }
    )

    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    });
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err){
                    console.log(err);
                }
                newUser.password=hash;
                newUser.save().then(use=>{
                    jwt.sign(
                        {
                        id:use.id
                    },process.env.jwtSecret,{expiresIn:6000},(err,token)=>{
                        if(err)throw err;
                        res.status(201).json({token,
                            use:{
                                id:use.id,
                                name:use.name,
                                email:use.email
                            }
                           
                        })

                    })
                   }).catch(err=>console.log(err))
            })
        });
       
    

})

module.exports=router;