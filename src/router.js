const express = require("express")

const router = express.Router()

router.get('/', (req, res) => {
  console.log("Bem vindo ao sistema")
  res.json({ message: "Welcome" })
})

module.exports = router