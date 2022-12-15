class EcommerceService {
  constructor(knex) {
    this.knex = knex;
  }

  async list() {
    let products = await this.knex("products").select("*");
    return products;
  }

  async listhome() {
    let homepro = await this.knex("products").select("*").where("home", true);
    return homepro;
  }

  async userName() {
    let userName = await this.knex
      .select("*")
      .from("users_profile")
      .join("users", (qb) => {
        qb.on("users_profile.id", "=", "users.id");
      });
    return userName;
  }

  async addToCart(userId, productId) {
    await this.knex("cart").insert({
      product_id: productId,
      user_id: userId,
    });
  }

  async getCart() {
    let carro = await this.knex("*")
      .from("cart")
      .join("products", (dbq) => {
        dbq.on("cart.product_id", "=", "products.id");
      });
    return carro;
  }
}

module.exports = EcommerceService;
