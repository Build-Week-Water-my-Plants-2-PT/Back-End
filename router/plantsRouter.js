const express = require("express");
const router = require("express").Router();
const Plants = require("../models/plantsModel");
const restrict = require("../middleware/restricted");
const validateUserId = require("../middleware/validateUserId")
const validatePlantData = require("../middleware/validatePlantData")

const db = require("../data/config")

// Get all the plants
router.get('/', restrict(), (req, res) => {
  Plants.findPlants()
    .then(plants => {
      res.status(200).json(plants);
    })
    .catch(err => {
      res.status(500).json({ error: 'list of plants is not received' })
    })
})

// Get All of a specific users plants

router.get(
  "/users/:id/plants", 
  async (req, res, next) => {
    try {
      const plants = await Plants.findPlantsByUserID(req.params.id);
      res.json(plants);
    } catch (err) {
      next(err);
    }
  }
);


// Get an individual plant by plant id

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  Plants.findPlantByID(id)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "plant with this specific id does not exist" });
    });
});

// Add a new Plant by user id

router.post("/",  (req, res) => {
  let plant = req.body;
  const { nickname } = req.body;
  if (!nickname) {
    return res.status(400).json({ message: "Please provide a plant name." });
  }
  Plants.addPlant(plant)
    .then(plant => {
      return res.status(201).json(plant);
    })
    .catch(err => res.status(500).json(err));
});

// Update an existing Plant by plant id

router.put('/:id'/*, restrict()*/, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const updatedPlant = { ...changes, id };

  Plants.updatePlant(id, changes)
    .then(editPlant => {
      console.log(editPlant);
      res.status(200).json(updatedPlant);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'could not change plant information' });
    })
})

// Delete an existing plant 

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Plants.findPlantByID(id)
    .then((plant) => {
      if (plant) {
        Plants.removePlant(id)
          .then((deletedPlant) => {
            res.status(200).json({ removed: deletedPlant });
          })
          .catch((err) => {
            res.status(400).json({ message: "Error removing plant" });
          });
      } else {
        res.status(400).json({ message: "Error finding Plant" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "could not delelte the plant" });
    });
});

module.exports = router;
