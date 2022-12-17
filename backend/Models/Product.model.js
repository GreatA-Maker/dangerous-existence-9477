const { mongoose, Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  brand: { type: String },
  Price: { type: Number },
  Name: { type: String },
  category: { type: String },
  image: { type: String },
  rating: { type: Number },
  discount: { type: Number },
  OlderPrice: { type: Number },
});

const Product = model('product', ProductSchema);
module.exports = {Product};
