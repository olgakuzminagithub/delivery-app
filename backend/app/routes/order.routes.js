module.exports = app => {
  const orders = require("../controllers/order.controller.js");
  var router = require("express").Router();

  // Create a new Order
  router.post("/", orders.create);

  // Retrieve all Shops
  router.get("/", orders.findAll);

  app.use('/api/orders', router);

};
