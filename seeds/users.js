/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      first_name: "Alejandro",
      last_name: "Piacquadio",
      email: "alipi92@gmail.com",
      password: "20327033",
    },
  ]);
};
