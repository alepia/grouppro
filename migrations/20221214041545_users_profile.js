/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users_profile", (table) => {
    table.increments("id").primary();
    table.integer("user_id");
    table.foreign("user_id").references("users.id");
    table.string("first_name");
    table.string("last_name");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users_profile");
};
