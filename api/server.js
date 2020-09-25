const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
dotenv.config();
const server = express();

const authRouter = require("../router/authRouter");
const plantsRouter = require("../router/plantsRouter");
const userRouter = require("../router/userRouter");

const restrict = require("../middleware/restricted");


server.use(helmet());
const whitelist = [
  "http://localhost:3000/",
  "https://water-my-plants-front-end.vercel.app",
];
server.use(
  cors({
    credentials: true,
    origin: whitelist
  })
);

server.use(express.json());


server.use("/api/auth", authRouter);
server.use('/api/plants', restrict(), plantsRouter);
//server.use("/api/plants", plantsRouter);
server.use("/users", restrict(), userRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Water My Plants" });
});

module.exports = server;
