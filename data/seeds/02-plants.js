exports.seed = function(knex){
  // delete all exusted entries
  return knex('plants').delete()
  .then(function(){
    // inserting seed entries
    return knex('plants').insert([
      {id: 1, user_id:'1', nickname: 'African sheepbush', species:'Pentzia incana', H2oFrequency: 15 },
      {id: 2, user_id:'1', nickname: 'Arrowwood', species:'Cornus florida', H2oFrequency: 7 },
      {id: 3, user_id:'2', nickname: 'European ash', species:'Fraxinus excelsior', H2oFrequency: 2},
      {id: 4, user_id:'2', nickname: 'Indian arrowwood', species:'Cornus florida', H2oFrequency: 5},
      {id: 5, user_id:'3', nickname: 'Bamboo', species:'Bambuseae', H2oFrequency: 7},
      {id: 6, user_id:'3', nickname: 'Bear corn', species:'Veratrum viride', H2oFrequency: 1 },
      {id: 7, user_id:'4', nickname: 'Birds nest', species:'Daucus carota', H2oFrequency: 10},
      {id: 8, user_id:'4', nickname: 'Cherry', species:'Prunus spp', H2oFrequency: 5},
      {id: 9, user_id:'5', nickname: 'Swamp dewberry', species:'Rubus hispidus', H2oFrequency: 2},
      {id: 10, user_id:'5', nickname: 'Huckleberry', species:'Vaccinium spp', H2oFrequency: 4},
      {id: 11, user_id:'6', nickname: 'Little sunflower', species:'Helianthella', H2oFrequency: 30},
      {id: 12, user_id:'6', nickname: 'Maple', species:'Acer', H2oFrequency: 5},

    ])
  })
}
