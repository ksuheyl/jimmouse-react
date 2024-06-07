const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

router.post("/", async (req, res) => {
  try {
    const { name, image } = req.body;

    const newCategory = new Category({ name, image });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);

    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const updatesData = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updatesData,
      { new: true }
    );

    res.status(200).json(updatedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    res.status(200).json(deletedCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

module.exports = router;
