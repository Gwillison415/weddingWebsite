exports.up = (knex, Promise) => {
  return knex.schema.createTable('dependent_guests', (table) => {
  table.increments('id')
  .primary(); //my fb id is 17 char long
  table.string('full_name', 'varchar(30)')
  .notNullable();
  table.string('main_guest')
  .references('full_name')
  .inTable('main_guests')
  .notNullable()
  .onDelete('CASCADE')
  table.string('rsvp').nullable()
  table.boolean('final_rsvp').nullable()
  table.boolean('rehersal_rsvp').nullable()
  table.boolean('rehersal_invite').nullable()
  table.boolean('carpooling').nullable()
  table.datetime('arrival_time', 2).nullable()
  table.datetime('departure_time', 2).nullable()
  });
};


exports.down = (knex, Promise) => knex.schema.dropTable('dependent_guests');
