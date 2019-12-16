const express = require("express");
const router = express.Router();
const Store = require("../models/Store");
const Item = require("../models/Item");

//get specific store page
router.get("/:id", (req, res) => {
  Store.findById(req.params.id)
    .then(store => {
      res.json(store);
    })
    .catch(err => {
      res.json({ msg: "store doesn't exist", err: err });
    });
});
//get all stores page
router.get("/", async (req, res) => {
  try {
    let allStores = await Store.find();
    res.json(allStores);
  } catch (error) {
    res.json({ msg: error});
  }
});


//get all items inside a chosen store
router.get("/:id/items/", async (req, res) => {
  try {
    let chosenStore = await Store.findById(req.params.id).populate("store_items");
    res.json(chosenStore.store_items);
  } catch (error) {
    res.json({ msg: error});
  }
});

//create Store by admin
router.post("/newstore", async (req, res) => {
  try {
    let store = new Store(req.body);
    let savedStore = await store.save();
    res.json({ msg: "added", store: savedStore });
  } catch (error) {
    res.json({ msg: error});
  }
});
//delete a Store
router.delete("/:store_id", (req, res) => {
  Store.findByIdAndDelete(req.params.store_id)
    .then(store => {
      res.json({ msg: "deleted successfully", store: store });
    })
    .catch(err => {
      res.json({ msg: "Store doesn't exist", err: err });
    });
});
//edit a Store 
router.put("/:store_id", (req, res) => {

  let updatedStore = req.body

  Store.findByIdAndUpdate(req.params.store_id,updatedStore)
    .then(response => {
      res.json({ msg: "edited successfully", store: response });
    })
    .catch(err => {
      res.json({ msg: "Store doesn't exist", err: err });
    });
});
//add an item inside the store
router.put("/:id/items/newitem", async (req, res) => {
  // console.log(req.body);
  Store.findById(req.params.id).then(store => {
    let item = new Item(req.body);
    store.store_items.push(item._id);
    item.save();
    store.save().then(check => {
      res.send({ store, item, check });
    });
  });
});




module.exports = router;
