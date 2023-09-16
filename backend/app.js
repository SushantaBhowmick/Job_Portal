const express = require('express')
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const errorMiddle = require('./middleware/error');
const auth = require('./routes/authRoutes')
const user = require('./routes/userRoutes')
const jobType = require('./routes/jobTypeRoutes')

require("dotenv").config();

const port = process.env.PORT || 4000;

//database connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log(`DataBase Connected to ${mongoose.connection.host}`))
.catch((error)=>console.log(error));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));
app.use(cookieParser())
app.use(cors())

//Routes
app.get('/get',(req,res)=>{
    res.send("Hello frm Node JS")
})
app.use("/api/v1/",auth)
app.use("/api/v1/",user)
app.use("/api/v1/",jobType)


app.use(errorMiddle);

app.listen(port,()=>{
    console.log(`Server is working on ${port}`);
})