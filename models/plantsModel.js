const db = require('../data/config')

// const findPlants = () => {
//     return db('plants').select('id','nickname', 'species', 'h2oFrequency', 'user_id' )
// }


function findPlantByID(plant_id) {
    return db("plants").where({ plant_id }).first();
  }


function findPlantsByUserID(user_id) {
    return db("plants as p")
      .innerJoin("users as u", "u.id", "p.user_id")
      .where("p.user_id", user_id)
      .select(
        "p.id",
        "p.nickname",
        "p.species",
        "p.h2oFrequency",
        "p.user_id"
      );
  }


 function addPlant(plant) {
    const [id] = db("plants").insert(plant);
    return findPlantByID(plant_id);
  }


const updatePlant = (plant_id, plant) => {
    return db('plants')
        .where({plant_id})
        .update(plant);
}


const removePlant = (plant_id) => {
    return db('plants')
        .where('plant_id', plant_id)
        .del();
}

module.exports = {
    // findPlants,
    findPlantsByUserID,
    findPlantByID,
    addPlant,
    updatePlant,
    removePlant
}