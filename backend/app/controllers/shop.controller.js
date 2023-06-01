const db = require("../models");
const Shop = db.shops;

// Create and Save a new Shop
exports.create = (req, res) => {
// Validate request
  if (!req.body.shopName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Shop
  const shop = new Shop({
    shopid  : req.body.shopid,
    shopName: req.body.shopName,
    position: req.body.position,
    price: req.body.price
  });

  // Save Shop in the database
  shop
    .save(shop)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while creating the Shop."
      });
    });
};

// Retrieve all Shops from the database.
exports.findAll = (req, res) => {
const shopName = req.query.shopName;
  var condition = shopName ? { shopName: { $regex: new RegExp(shopName), $options: "i" } } : {};

  Shop.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while retrieving shops."
      });
    });
};

// Find a single Shop with an shopName
exports.find = (req, res) => {
 const shopid = req.params.shopid;

  Shop.find({shopid:shopid})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Shop with shopid " + shopid });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Shop with shopid=" + shopid });
    });
};

// Update a Shop by the id in the request
exports.update = (req, res) => {
if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const shopid = req.params.shopid;

  Shop.findByIdAndUpdate(shopid, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Shop with shopid=${shopid}. Maybe Shop was not found!`
        });
      } else res.send({ message: "Shop was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Shop with shopid=" + shopid
      });
    });
};

// Delete a Shop with the specified id in the request
exports.delete = (req, res) => {
const id = req.params.id;

  Shop.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Shop with id=${id}. Maybe Shop was not found!`
        });
      } else {
        res.send({
          message: "Shop was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Shop with id=" + id
      });
    });
};

// Delete all Shops from the database.
exports.deleteAll = (req, res) => {
 Shop.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Shops were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error occurred while removing all shops."
      });
    });
};


