const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
dotenv.config()
const server = express();

const authRouter = require('../router/authRouter');
const plantsRouter = require('../router/plantsRouter');
const userRouter = require('../router/userRouter');

const {restrict} = require('../middleware/restricted')
const cookieParser = require('cookie-parser');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use('/api/auth', authRouter);
//server.use('/api/plants', restrict(), plantsRouter);
server.use('/api/plants', plantsRouter);
server.use('/users', userRouter)


server.get('/',(req,res)=>{
  res.status(200).json("Welcome to Water My Plants")
})

module.exports = server