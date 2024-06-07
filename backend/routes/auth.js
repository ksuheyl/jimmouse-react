const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const doubleRegister = await User.findOne({ email });
    if (doubleRegister) {
      return res.status(400).json({ error: "email address is invalid" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({error: "invalid e-mail or password"});
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
 
    if (!isPasswordValid) {
        return res.status(401).json({error: "invalid e-mail or password"});
      }
    res.status(200).json({
      id: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

module.exports = router;
