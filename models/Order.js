const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    store_id: 
    {
      type: Schema.Types.ObjectId,
      ref: "Store",
      required: true
    },
    user_id: 
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    items: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: "Item"
        },
        quantity: {
          type: String,
          required: true
        }
      }],
      status: {
        type: String,
        enum: ["pickup", "delivery", "dinein"],
        required: true
      },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
