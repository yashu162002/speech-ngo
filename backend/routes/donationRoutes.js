const express = require("express");

const router = express.Router();

router.post("/create-order", (req, res) => {
  const {
    amount,
    name,
    email,
    phone,
    pan,
    address,
    donationType,
  } = req.body;

  console.log("Donation request received:");

  console.log({
    amount,
    name,
    email,
    phone,
    pan,
    address,
    donationType,
  });

  if (!amount || amount <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid donation amount",
    });
  }

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name, email and phone are required",
    });
  }

  res.json({
    success: true,
    message: "Donation order request received",
    data: {
      amount,
      donationType,
      name,
      email,
      phone,
    },
  });
});

module.exports = router;