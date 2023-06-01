const db = require("../models");
const Order = db.orders;

// Create and Save a new Order
exports.create = (req, res) => {
// Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Order
  const order = new Order({
    name  : req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    shopName: req.body.shopName,
    cart: req.body.cart,
    sum: req.body.sum
  });

  // Save Order in the database
  order
    .save(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Order."
      });
    });
};
// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Order.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while retrieving orders."
      });
    });
};



