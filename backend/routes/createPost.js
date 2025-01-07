const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const POST = mongoose.model("POST")

//Route , only logined person can send the request
router.get("/allposts",requireLogin, (req, res) => {
  POST.find()
  .populate("postedBy","_id name")
  .then((posts) => res.json(posts))
  .catch(err => console.log(err))
})


router.post('/createPost', requireLogin, (req, res) => { // Change to POST
    const { body, pic} = req.body;
    if(!body || !pic){
        return res.status(422).json({error: 'Please add all fields'})
    }
  req.user
  const post = new POST({
    body,
    photo:pic,
    postedBy: req.user
  }) //creating new object with model name 'POST'.
//saving it in monogo database
post.save().then((result)=>{   
    return res.json({post:result})
}).catch(err=> console.log(err))
})

module.exports = router