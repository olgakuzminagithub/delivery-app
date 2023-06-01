module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      email: String,
      phone: Number,
      address: String,
      shopName: String,
      cart: String,
      sum: Number,
    },
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Order = mongoose.model("order", schema);
  return Order;
};

