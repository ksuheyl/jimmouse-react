const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

router.post("/", async (req, res) => {
  try {
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.get("/", async (req, res) => {
  try {
    const coupon = await Coupon.find();

    res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const coupon = await Coupon.findById(couponId);
    if (!coupon) {
      return res.status(404).json({ error: "coupon not found" });
    }
    res.status(200).json(coupon);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;

    const coupon = await Coupon.findOne({ code: couponCode });

    if (!coupon) {
      return res.status(404).json({ error: "coupon not found" });
    }
    res.status(200).json(coupon.discountPercent);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updatesData = req.body;
    const coupon = await Coupon.findById(couponId);
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    const updatedCoupon = await Coupon.findByIdAndUpdate(
      couponId,
      updatesData,
      { new: true }
    );

    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json();
  }
});

router.delete("/:couponId", async (req, res) => {
    try {
      const couponId = req.params.couponId;
      const coupon = await Coupon.findById(couponId);
      if (!coupon) {
        return res.status(404).json({ error: "coupon not found" });
      }
  
      const deletedCoupon = await Coupon.findByIdAndDelete(couponId);
  
      res.status(200).json(deletedCoupon);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  });
module.exports = router;
