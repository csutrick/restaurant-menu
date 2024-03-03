const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
