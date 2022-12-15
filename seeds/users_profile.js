/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users_profile").del();
  await knex("users_profile").insert([
    { user_id: 1, first_name: "Alejandro", last_name: "Piacquadio" },
  ]);
};
