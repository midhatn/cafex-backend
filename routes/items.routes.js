const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

//get specific item page
router.get("/:item_id", (req, res) => {
  Item.findById(req.params.item_id)
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      res.json({ msg: "item doesn't exist", err: err });
    });
});

//delete a item
router.delete("/:item_id", (req, res) => {
  Item.findByIdAndDelete(req.params.item_id)
    .then(item => {
      res.json({ msg: "deleted successfully", item: item });
    })
    .catch(err => {
      res.json({ msg: "item doesn't exist", err: err });
    });
});

//edit a item
router.put("/:item_id", async (req, res) => {
  let updatedItem = req.body;

  Item.findByIdAndUpdate(req.params.item_id, updatedItem)
    .then(response => {
      res.json({ msg: "item edited", updatedItem: response });
    })
    .catch(err => {
      res.json({ msg: "item couldn't be found", err: err });
    });
});

module.exports = router;
