//const db = require('')

const findPlants = () => {
    return db('plants').select('id','nickname', 'species', 'h2oFrequency', 'user_id' )
}

const findPlantsByID = (id) => {
    return db('plants').where({id}).first();
}

const addPlant = (plant) => {
    return db('plants')
        .insert(plant, 'id')
        .then(([id]) => findByPlantID(id));
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
    findPlantsByID,
    addPlant,
}