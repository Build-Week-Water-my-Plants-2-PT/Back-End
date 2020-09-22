const express = require("express");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const userDB = require("../models/userModels");

const router = express.Router();

router.post("/register", async (req, res) => {
   if(!req.body.username || !req.body.password || !req.body.phone_number ) {
     return res.status(400).json({message: "we require an username, phone_number and a password"})
   }
  try {
    const existingUser = await userDB.findByUsername(req.body.username);
    //console.log(existingUser);

    if (existingUser) {
      return res
        .status(409)
        .json({ message: "A user with that username already exist" });
    } else {
      const password = await bcrypt.hashSync(req.body.password, 10);
      const newUser = {
        id: Date.now(),
        username: req.body.username,
        password,
        phone_number: req.body.phone_number,
      };

      userDB
        .addUser(newUser)
        .then((user) => {
          res
            .status(201)
            .json({ message: `Welcome ${newUser.id} ${newUser.username}` });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } catch (err) {
    //console.error(err);
    res.status(500).json({
      errorMessage:
        "Something went horribly horribly wrong. You should not do that again...",
    });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { username, password, phone_number } = req.body;

    if (!username || !password) {
      //checking if username and password is valid
      return res
        .status(400)
        .json({ message: "We require username and password on the body" });
    }

    const user = await userDB.findBy({ username }).first();
    //console.log(user);
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      //validating password
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = JWT.sign({ userID: user.id }, process.env.SECRET);
    res.cookie("token", token);
    res.json({
      user,
      token: token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      errorMessage:
        "Something went horribly horribly wrong. You should not do that again...",
    });
  }
});

module.exports = router;
