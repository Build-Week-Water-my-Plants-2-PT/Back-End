
exports.up = function(knex) {
return knex.schema.createTable('plants', tbl=>{
  tbl.increments();
  tbl.string('nickname', 128).notNullable();
  tbl.string('species', 128).notNullable();
  tbl.string('H2oFrequency', 128).notNullable();
  tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');

})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('plants')
};
