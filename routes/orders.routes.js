const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const User = require("../models/User");
const Order = require("../models/Order");


//new order by user

router.post("/neworder", async (req, res) => {
  try {
    let order = new Order(req.body);
    let savedOrder = await order.save();
    res.json({ msg: "added", order: savedOrder });
  } catch (error) {
    res.json({ msg: error});
  }
});
//get order by id 
router.get("/:id", (req, res) => {
    Order.findById(req.params.id)
      .then(order => {
        res.json(order);
      })
      .catch(err => {
        res.json({ msg: "order doesn't exist", err: err });
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
