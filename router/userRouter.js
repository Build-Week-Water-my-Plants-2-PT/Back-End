const express = require("express")
const Users = require("../models/userModels");
// const {restrict} = require("../middleware/restricted");

const router = express.Router();

router.put("/:id", (req,res) => {
    //where can the user update their phone number, password
    const {id} = req.params;
    const user = req.body;
    const updatedUser = {...user, id}
    
    Users.update(id, user)
    .then(editedUser => {
        res.status(200).json(updatedUser);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error:'Unable to update user information'});
    })
});

router.get('/',(req, res)=>{
    Users.find()
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=>{
        res.status(500).json({error: 'list of user could not retrive'})
    })
})
  
router.get('/:id', (req,res) => {
    Users.findByID()
    .then(user=>{
        res.status(200).json(user);
    })
    .catch(err=>{
        res.status(500).json({error: 'user with this id could not retrive'})
    })
})
  
  module.exports = router;

  /*
  const id = req.params.id;
    const user = req.body;
    const updatedUser = (...user, id)

    Users.updateUser(id, user)
    .then(editedUser => {
        res.status(200).json(updatedUser)
    }) .catch(error => {
        console.log(error)
    })*/