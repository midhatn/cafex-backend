const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const User = require("../models/User");
const Order = require("../models/Order");


//new order by user
//get order by id 
router.get("/:id", (req, res) => {
    Store.findById(req.params.id)
      .then(store => {
        res.json(store);
      })
      .catch(err => {
        res.json({ msg: "store doesn't exist", err: err });
      });
  });
//update order by user 
//delete order
//get all stores page
router.get("/", async (req, res) => {
    try {
      let allOrders = await Order.find();
      res.json(allOrders);
    } catch (error) {
      res.json({ msg: error});
    }
  });


module.exports = router;
