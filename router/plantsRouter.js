const router = require("express").Router();
const Plants = require("../models/plantsModel");
const restrict = require("../middleware/restricted");
const validateUserId = require("../middleware/validateUserId");

// Get All of a specific users plants

router.get("/users/:id/plants", validateUserId(), (req, res) => {
  Plants.findPlants()
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => {
      res.status(500).json({ error: "Counld not retrive plants" });
    });
});

// Get an individual plant

router.get("/plants/:plant_id", (req, res, next) => {
  const { plant_id } = req.params;

  Plants.findPlantsByID(plant_id)
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: "plant with this specific id does not exist" });
    });
});

// Add a new Plant

router.post("/users/:id/plants", validateUserId(), async (req, res, next) => {
  try {
    const newPlant = req.body;
    newPlant.user_id = req.params.id;
    Plants.addPlant(newPlant);
    res.status(200).json(newPlant);
  } catch (err) {
    res.status(500).json({ message: "Failed to add new plant." });
  }
});

// Update an existing Plant

router.put("/plants/plant_id", (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  const updatedPlant = { ...plant, id };

  Plants.findPlantByID(plant_id)
    .then((plant) => {
      if (plant) {
        Plants.updatePlant(changes, plant_id).then((updatedPlant) => {
          res.status(201).json(updatedPlant);
        });
      } else {
        res.status(404).json({ message: "Couldn't find your plant" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "could not update plant information" });
    });
});

// Delete an existing plant 

router.delete("/plants/:plant_id", (req, res) => {
  const plant_id = req.params.plant_id;

  Plants.findPlantByID(plant_id)
    .then((plant) => {
      if (plant) {
        Plants.removePlant(plant_id)
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

// router.POST('/plants', (req,res) => {
//     //create plant { id:integer, nickname:string, species:string, h20frequency: ????}
// })
// router.PUT('/plants', (req,res) => {
//     //UPdating plant { id:integer, nickname:string, species:string, h20frequency: ????}
// })
// router.DELETE('/plants:id', (req,res) => {
//     //deleting whichever plant
// })

module.exports = router;
