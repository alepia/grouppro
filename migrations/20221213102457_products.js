/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments().primary();
    table.string("name");
    table.integer("price");
    table.integer("stock");
    table.string("description");
    table.string("img_src");
    table.string("type");
    table.boolean("home");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
