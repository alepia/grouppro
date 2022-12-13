  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("products").del();
    await knex("products").insert([
      {
        name: "Air Force 1",
        price: 1700,
        stock: 23,
        description: "Lorem ipsum dolor sit amet, consectetur",
        imgSrc: "img/thumbnail2.png",
        type: "mens"
      },
      {
        name: "Nike Air Force",
        price: 1300,
        stock: 12,
        description: "Lorem ipsum dolor sit amet, consectetur",
        imgSrc: "img/thumbnail1.png",
        type: "kids"
      },
      {
        name: "New Balance",
        price: 1100,
        stock: 233,
        description: "Lorem ipsum dolor sit amet, consectetur",
        imgSrc: "img/thumbnail1.png",
        type: "mens"
      },
      {
        name: "Reebok",
        price: 900,
        stock: 2,
        description: "Lorem ipsum dolor sit amet, consectetur",
        imgSrc: "img/thumbnail5.png",
        type: "mens"
      },
    ]);
  };