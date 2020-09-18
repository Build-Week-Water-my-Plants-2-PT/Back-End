exports.seed = function(knex){
  // delete all exusted entries
  return knex('plants').delete()
  .then(function(){
    // inserting seed entries
    return knex('plants').insert([
      {plant_id: 1, user_id:'1', nickname: 'African sheepbush', species:'Pentzia incana', H2oFrequency: '15 days'},
      {plant_id: 2, user_id:'1', nickname: 'Arrowwood', species:'Cornus florida', H2oFrequency: 'weekly'},
      {plant_id: 3, user_id:'2', nickname: 'European ash', species:'Fraxinus excelsior', H2oFrequency: '2 days'},
      {plant_id: 4, user_id:'2', nickname: 'Indian arrowwood', species:'Cornus florida', H2oFrequency: '5 days'},
      {plant_id: 5, user_id:'3', nickname: 'Bamboo', species:'Bambuseae', H2oFrequency: 'monthly'},
      {plant_id: 6, user_id:'3', nickname: 'Bear corn', species:'Veratrum viride', H2oFrequency: 'daily' },
      {plant_id: 7, user_id:'4', nickname: 'Birds nest', species:'Daucus carota', H2oFrequency: '10 days'},
      {plant_id: 8, user_id:'4', nickname: 'Cherry', species:'Prunus spp', H2oFrequency: '5 days'},
      {plant_id: 9, user_id:'5', nickname: 'Swamp dewberry', species:'Rubus hispidus', H2oFrequency: '2 days'},
      {plant_id: 10, user_id:'5', nickname: 'Huckleberry', species:'Vaccinium spp', H2oFrequency: '4 days'},
      {plant_id: 11, user_id:'6', nickname: 'Little sunflower', species:'Helianthella', H2oFrequency: 'monthly'},
      {plant_id: 12, user_id:'6', nickname: 'Maple', species:'Acer', H2oFrequency: 'weekly'},

    ])
  })
}
