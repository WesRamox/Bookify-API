const express = require("express")
const router = express.Router()
const Book = require("./models/Book")
 
router.get("/", (req, res) => {
    res.json({ message: "Bem-vindo à API!" })
});



module.exports = router;