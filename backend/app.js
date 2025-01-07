const express =require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const {mongoUrl} = require('./keys')
const cors = require('cors');


app.use(cors())

require('./models/model')
require('./models/posts')
app.use(express.json())//middleware fuctions
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
mongoose.connect(mongoUrl)

mongoose.connection.on("connected", ()=>{
    console.log("Connected to MongoDB")
})

mongoose.connection.on("error", ()=>{
    console.log("Not Connected to MongoDB")
})




app.listen(port, ()=>{
   console.log(`server is running at port ${port}`)
});