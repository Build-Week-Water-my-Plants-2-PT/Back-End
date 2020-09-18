const router = require('express').Router();
const Plants = require("../models/plantsModel");
const {restrict} = require('../middleware/restricted')

router.get('/',restrict(), (req,res)=>{
  Plants.findPlants()
  .then(plants=>{
    res.status(200).json(plants)
  })
  .catch(err=>{
    res.status(500).json({error:'Counld not retrive plants'})
  })
})


router.get('/:id', (req,res)=>{
  const id = req.params.id;

  Plants.findPlantsByID(id)
  .then(plants=>{
    res.status(200).json(plants);
  })
  .catch(err=>{
    res.status(500).json({error:'plant with this specific id does not exist'})
  })
})

router.post("/", (req,res)=>{
  const plantData = req.body;
  
  Plants.addPlant
  .then(plant=>{
    res.status(201).json(plant);
  })
  .catch(error=>{
    res.status(500).json({message: 'Failed to add new plant.'}
    );
})
})

router.put('/:id',(req,res)=>{
  const id = req.params.id;
  const plant = req.body;
  const updatedPlant = {...plant, id}

  Plants.updatePlant(id,plant)
  .then(editedPlant=>{
    console.log(editedPlant)
    res.status(200).json(updatedPlant)
  })
    .catch(error=>{
      res.status(500).json({error:'could not update plant information'})
    })
})


router.delete('/:id',(req,res)=>{
  const id = req.params.id;

  Plants.removePlant(id)
  .then(deletedPlant=>{
    console.log(deletedPlant)
    res.status(200).json({success:'Plant deleted successfully'})
  })
  .catch(error=>{
    console.log(error);
    res.status(500).json({error: 'could not delelte the plant'}) 
  })
})

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
