module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      shopid: Number,
      shopName: String,
      position: String,
      price: Number
    },
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Shop = mongoose.model("shop", schema);
  return Shop;
};

