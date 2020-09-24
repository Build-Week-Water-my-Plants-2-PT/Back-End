const bcrypt = require('bcryptjs')

exports.seed = function(knex){
  // delete all existed entries
  return knex('users').delete()
  .then(function(){
    // inserting seed entries
    return knex('users').insert(
    [
      {id: 91, username:'Homer Simpson', password: bcrypt.hashSync('passwordforhomer',12), phone_number:1234567890},
      {id: 92, username:'Marge Simpson', password: bcrypt.hashSync('passwordformarge',12), phone_number:2345678901},
      {id: 93, username:'Bart Simpson', password: bcrypt.hashSync('passwordforbart',12), phone_number:3456789012},
      {id: 94, username:'Lisa Simpson', password: bcrypt.hashSync('passwordforlisa',12), phone_number:4567890123},
      {id: 95, username:'Mr.Burns', password: bcrypt.hashSync('passwordforburns',12), phone_number:5678901234},
      {id: 96, username:'Ned Flanders', password: bcrypt.hashSync('passwordforned',12), phone_number:6789012345}
    ]  
    )
  })
}