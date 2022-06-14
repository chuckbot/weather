/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("city", (table) => {
    table.increments("id");
    table.string("city_name").notNullable();
    table.double("temp").notNullable();
    table.double("humidity").notNullable();
    table.timestamp(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("city");
};
