const express = require("express")
const router = express.Router()

// Models
const User = require("../models/User")

router.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body

    const user = new User({
      name,
      email,
      password
    })

    await user.save()

    res.status(201).json({ message: "Success: User was created" });
  } catch (error) {
    res.status(500).json({ error: "Error ", details: error.message });
  }
})

module.exports = router;