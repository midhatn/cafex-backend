const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {
    owner_id: 
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    store_name: {
      required: true,
      type: String
    },
    store_logo: {
      type: String
    },
    available: {
      type: Boolean
    },
    store_website: {
      type: String
    },
    store_images: [
      {
      type: String
    }
  ],
    store_desc: {
      type: String
    },
    store_contact: {
      type: String
    },
    store_country: {
      type: String
    },
    store_city: {
      type: String
    },
    store_coordinates: {
      lat: {
        type: String,
        required: true
      },
      long: {
        type: String,
        required: true
      }
    },
    store_items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item"
      }
    ],
    store_orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order"
      }
    ],
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
