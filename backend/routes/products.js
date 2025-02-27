const express = require("express");
const Product = require("../models/Product.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});


router.put("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatesData = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatesData,
      { new: true }
    );
    
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    
    const deletedProduct = await Product.findByIdAndDelete(productId);
    
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.get("/search/:productName", async (req, res) => {
  try {
    const productName = req.params.productName;
    const products = await Product.find({
      name: { $regex: productName, $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

module.exports = router;
