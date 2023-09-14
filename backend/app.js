const express = require('express')
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const errorMiddle = require('./middleware/error');

require("dotenv").config();

const port = process.env.PORT || 4000;

//database connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log(`DataBase Connected to ${mongoose.connection.host}`))
.catch((error)=>console.log(error));

app.use(morgan('dev'));
app.use(bodyParser.json({limit:"50mb",extended:true}));
app.use(cookieParser())
app.use(cors())

app.use(errorMiddle);

app.listen(port,()=>{
    console.log(`Server is working on ${port}`);
})