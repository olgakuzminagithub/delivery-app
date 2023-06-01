module.exports = app => {
  const shops = require("../controllers/shop.controller.js");
  var router = require("express").Router();

  // Create a new Shop
  router.post("/", shops.create);

  // Retrieve all Shops
  router.get("/", shops.findAll);

  // Retrieve a single Shop with id
  router.get("/:shopid", shops.find);

  // Update a Shop with id
  router.put("/:shopid", shops.update);

  // Delete a Shop with id
  router.delete("/:shopid", shops.delete);

  // Delete all Shops
  router.delete("/", shops.deleteAll);

  app.use('/api/shops', router);

};
