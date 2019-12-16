const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    dob: {
      type: Date
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order"
      }
    ],
    coordinates: {
      lat: {
        type: String,
        required: true
      },
      long: {
        type: String,
        required: true
      }
    },
    image: {
      type: String
    },
    country: {
      type: String
    },
    city: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["admin", "user", "owner"],
      required: true
    },
    stores: [
      {
        type: Schema.Types.ObjectId,
        ref: "Store"
      }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
