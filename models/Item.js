const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    item_name: {
      required: true,
      type: String
    },
    item_price: {
      required: true,
      type: String
    },
    item_desc: {
      type: String
    },
    item_image: {
      type: String
    }
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
