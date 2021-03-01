
exports.up = async function(knex) {
  await knex.schema.createTable("car-dealer", (table) => {
table.integer("id").notNull().unique().primary()
table.integer("VIN").notNull().unique()
table.text("make").notNull()
table.text("model").notNull()
table.integer("mileage").notNull()
table.text("title-status")
table.text("transmission-type")
  })
};

exports.down = async function(knex) {
  
};
