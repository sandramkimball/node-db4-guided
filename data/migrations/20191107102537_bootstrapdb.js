
exports.up = function(knex) {
  return knex.schema.createTable('species', tbl=> {
      tbl.increments(); //type of Prime Key is integer (sometimes serial)
      tbl.string('name', 255).notNullable();
  })

  .createTable('animals', tbl=> {
      tbl.increments();
      tbl.string('name', 255).notNullable();

      //now define foreign keys:
      tbl
        .integer('species_id')
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })

  .createTable('zoos', tbl=> {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.string('address', 255);
})

  .createTable('animal_zoos', tbl=> {
      tbl.increments();
      tbl
        .integer('zoo_id')
        .unsigned()
        .references('id')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('species_id')
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.date('from', 64);
      tbl.date('to', 64);
  })

};

exports.down = function(knex) {
  
};

//integers are 'unsigned', [absolute value], no negative values. So you can have even more possible numbers.

//CASCADING: We have bear speices record and some bears. If we delete the specie, what happens to the bears(child records)? 
//.onDelete('CASCADE', 'RESTRICT', 'NO ACTION', 'SET NULL') 
//    - deletes records from Prime Key table 

//.onUpdate() 
//    - changes the value of primary key