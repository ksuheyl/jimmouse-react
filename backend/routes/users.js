const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.delete("/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const deletedUsers = await User.findOneAndDelete({email})

    res.status(200).json(deletedUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});



module.exports = router;
