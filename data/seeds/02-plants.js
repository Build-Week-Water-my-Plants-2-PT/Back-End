exports.seed = function(knex){
  // delete all exusted entries
  return knex('plants').delete()
  .then(function(){
    // inserting seed entries
    return knex('plants').insert([
      {id: 91, user_id:'91', nickname: 'African sheepbush', species:'Pentzia incana', H2oFrequency: '15 days'},
      {id: 92, user_id:'91', nickname: 'Arrowwood', species:'Cornus florida', H2oFrequency: 'weekly'},
      {id: 93, user_id:'92', nickname: 'European ash', species:'Fraxinus excelsior', H2oFrequency: '2 days'},
      {id: 94, user_id:'92', nickname: 'Indian arrowwood', species:'Cornus florida', H2oFrequency: '5 days'},
      {id: 95, user_id:'93', nickname: 'Bamboo', species:'Bambuseae', H2oFrequency: 'monthly'},
      {id: 96, user_id:'93', nickname: 'Bear corn', species:'Veratrum viride', H2oFrequency: 'daily' },
      {id: 97, user_id:'94', nickname: 'Birds nest', species:'Daucus carota', H2oFrequency: '10 days'},
      {id: 98, user_id:'94', nickname: 'Cherry', species:'Prunus spp', H2oFrequency: '5 days'},
      {id: 99, user_id:'95', nickname: 'Swamp dewberry', species:'Rubus hispidus', H2oFrequency: '2 days'},
      {id: 100, user_id:'95', nickname: 'Huckleberry', species:'Vaccinium spp', H2oFrequency: '4 days'},
      {id: 101, user_id:'96', nickname: 'Little sunflower', species:'Helianthella', H2oFrequency: 'monthly'},
      {id: 102, user_id:'96', nickname: 'Maple', species:'Acer', H2oFrequency: 'weekly'},

    ])
  })
}
