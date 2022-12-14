class EcommerceRouter {
  constructor(express, ecommerceService) {
    this.express = express;
    this.ecommerceService = ecommerceService;
  }

  router() {
    let router = this.express.Router();

    router.get("/shop", this.list.bind(this));
    router.get("/", this.listhome.bind(this));

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
}
module.exports = EcommerceRouter;
