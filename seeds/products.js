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
      img_src: "img/thumbnail2.png",
      type: "mens",
      home: true,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail1.png",
      type: "kids",
      home: true,
    },
    {
      name: "New Balance",
      price: 1100,
      stock: 233,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail1.png",
      type: "mens",
      home: true,
    },
    {
      name: "Reebok",
      price: 900,
      stock: 2,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail5.png",
      type: "mens",
      home: true,
    },
    {
      name: "Air Force 1",
      price: 1700,
      stock: 23,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail2.png",
      type: "mens",
      home: true,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail1.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail5.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail1.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail2.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail3.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail1.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail3.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail4.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail5.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail2.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail1.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail3.png",
      type: "kids",
      home: false,
    },
    {
      name: "Nike Air Force",
      price: 1300,
      stock: 12,
      description: "Lorem ipsum dolor sit amet, consectetur",
      img_src: "img/thumbnail5.png",
      type: "kids",
      home: false,
    },
  ]);
};
