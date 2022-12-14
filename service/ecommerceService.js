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
}

module.exports = EcommerceService;
