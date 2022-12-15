class EcommerceRouter {
  constructor(express, ecommerceService) {
    this.express = express;
    this.ecommerceService = ecommerceService;
  }

  router() {
    let router = this.express.Router();

    router.get("/shop", this.list.bind(this));
    router.get("/", this.listhome.bind(this));
    router.get("/test", this.username.bind(this));
    router.post("/cart", this.addToCart.bind(this));
    router.get("/cart", this.getCart.bind(this));

    return router;
  }

  list(req, res) {
    return this.ecommerceService
      .list()
      .then((products) => {
        res.json(products);
      })
      .catch((err) => res.status(500).json(err));
  }

  listhome(req, res) {
    return this.ecommerceService
      .listhome()
      .then((homepro) => {
        res.json(homepro);
      })
      .catch((err) => res.status(500).json(err));
  }

  username(req, res) {
    return this.ecommerceService
      .username()
      .then((userName) => res.json(userName))
      .catch((err) => res.status(500).json(err));
  }

  addToCart(req, res) {
    const productId = req.body.product_id;
    let userId = req.user.id;
    return this.ecommerceService.addToCart(userId, productId);
  }

  getCart(req, res) {
    return this.ecommerceService
      .getCart()
      .then((carro) => res.json(carro))
      .catch((err) => res.status(500).json(err));
  }
}
module.exports = EcommerceRouter;
