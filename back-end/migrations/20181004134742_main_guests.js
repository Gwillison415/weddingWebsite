exports.up = function(knex, Promise) {
  return knex.schema.createTable('main_guests_2', (table) => {
  table.increments('id')
  .primary(); //my fb id is 17 char long
  table.string('full_name', 'varchar(30)')
  .notNullable();
  table.string('email', 'varchar(65)')
  .notNullable()
  .unique();
  table.string('hashed_password', 'char(60)').nullable()
  table.string('address_1').nullable()
  table.string('address_2').nullable()
  table.string('city').nullable()
  table.string('state').nullable()
  table.integer('zip').nullable()
  table.integer('additional_guest_count').nullable()
  table.boolean('first_rsvp').nullable()
  table.boolean('final_rsvp').nullable()
  table.boolean('rehersal_rsvp').nullable()
  table.boolean('rehersal_invite').nullable()
  table.boolean('carpooling').nullable()
  table.datetime('sign_up_time', 2).defaultTo(knex.fn.now(6))
  table.datetime('arrival_time', 2).nullable()
  table.datetime('departure_time', 2).nullable()
  });
}

exports.down = (knex, Promise) => knex.schema.dropTable('main_guests');
