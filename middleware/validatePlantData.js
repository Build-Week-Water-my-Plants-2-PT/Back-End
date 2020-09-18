async function validatePlantData(req, res, next) {
 
  const { id } = req.params

  const plant = await Plants.findPlantByID(id)

  if(!plant){
    res.status(404).json({ message: 'plant does not exist'})
  } else if (!plant.nickname || !plant.species || !H2oFrequency){
    res.status(404).json({ message: 'Input missing data fields'})
  }
    next();
  }

  
  module.exports = validatePlantData;