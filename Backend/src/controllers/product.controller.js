const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const crudController = require("./crud.controller");

router.get("", crudController(Product).getAll);
router.get("/:id", crudController(Product).getOne);
// router.delete("/:id", crudController(Product).Delete);
router.patch("/:id", crudController(Product).patch);

router.post("", async (req, res) => {
  try {
    // const userId = req.user._id;
    const item = await Product.create({
    //   userId: userId,
      id: req.body.id,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      rating: req.body.rating,
    });
    return res.status(201).send(item);
  } catch {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
