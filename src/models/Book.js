const mongoose = require('mongoose')

const Book = mongoose.model("Book", {
  name: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = Book