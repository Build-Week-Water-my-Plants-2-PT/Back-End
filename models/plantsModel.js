const db = require('../data/config')

const findPlants = () => {
    return db('plants').select('id','nickname', 'species', 'h2oFrequency', 'user_id' )
}


function findPlantByID(id) {
    return db("plants").where({ id }).first();
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

  async function addPlant(plant) {
    const [id] = await db("plants").insert(plant);
  
    return findPlantByID(id);
  }

const updatePlant = (id, plant) => {
    return db('plants')
        .where({id})
        .update(plant);
}


const removePlant = (id) => {
    return db('plants')
        .where('id', id)
        .del();
}

module.exports = {
    findPlants,
    findPlantsByUserID,
    findPlantByID,
    addPlant,
    updatePlant,
    removePlant
}