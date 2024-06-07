const express = require("express");
const router = express.Router();

const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");
const authRoute = require("./auth.js");
const couponRoute = require("./coupon.js");
const usersRoute = require("./users.js");
const paymentRoute = require("./payment");

router.use("/categories", categoryRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons", couponRoute);
router.use("/users", usersRoute);
router.use("/payment", paymentRoute);

module.exports = router;
