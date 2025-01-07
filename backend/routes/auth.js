const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const USER = mongoose.model("USER");
const bcrypt = require('bcrypt');//helps to hide the password stored in database.
const jwt = require('jsonwebtoken')
const{jwt_secret} = require('../keys');
const requireLogin = require('../middlewares/requireLogin');

router.get('/',(req, res)=>{
    res.send("hello")
})

router.get("/createPost",requireLogin,(req, res)=>{
console.log("helo auth")

})

router.post("/signup",(req, res)=>{
   const {name, userName, email, password}= req.body;
   if(!name || !userName || !email || !password){
    return res.status(422).json({error:"Please add all the fields"})
   }
USER.findOne({$or:[{email:email},{userName:userName}]}).then((savedUser)=>{  //to ensure that no same userName and email are entered.
    if(savedUser){
    return res.status(422).json({error:"user already exists with that email or userName"})
}
bcrypt.hash(password,12).then((hashedPassword)=>{  //hashing the password using bycrpt for security purposes.
    const user = new USER({
        name,
        email,
        userName,
        password:hashedPassword
       })
    
       user.save()
        .then(user =>{res.json({message:"Registered successfully"})})
        .catch(err => {console.log(err)}) 
})


})

});

router.post("/signin",(req, res)=>{
    const {email, password}= req.body;
    if(!email || !password){
        return res.status(422).json({error:"Please add all email and password"})
    }
    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid email "})
        }      
       bcrypt.compare(password, savedUser.password).then((match)=>{
        if(match){
           //return res.status(200).json({message:"Signed-In successfully"})
           const token = jwt.sign({_id:savedUser._id}, jwt_secret)
           res.json(token)
           console.log(token)
        }else{
            return res.status(422).json({error:"Invalid password "})
        }
       })
       .catch(err => console.log(err))
    })
})

module.exports = router