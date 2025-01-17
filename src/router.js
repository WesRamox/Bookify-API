const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()

// Models
const Book = require("./models/Book")

router.get("/", (req, res) => {
  res.json({ message: "Bem-vindo à API!" })
});

// (POST /book): Adiciona um novo livro. { name, author, date }
router.post("/book", async (req, res) => {
  try {
    const { name, author } = req.body

    if (!name || !author) {
      return res.status(422).json({ message: "Warning: Author and name is required!" })
    }

    const bookAlredyExists = await Book.findOne({ name: name })

    if (bookAlredyExists) {
      return res.status(422).json({ message: "Warning: Book alredy Exists in our DB" })
    }

    const book = new Book({
      name,
      author
    })

    await book.save()

    res.status(201).json({ message: "Sucess: Book was created" });
  } catch (error) {
    res.status(500).json({ error: "Error ", details: error.message });
  }
})

// (GET /book/:id): Retorna um livro específico.
router.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar se o ID é válido antes de tentar a busca
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Warning: Book not found, please try with another ID" });
    }

    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ error: "Error", details: error.message });
  }
});

// (GET /books): Retorna todos os livros
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find()

    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ error: "Error: ", details: error });
  }
});

// (PUT /books/:id): Envia os novos dados para atualizar.

// (DELETE /books/:id): Remove o livro.



module.exports = router;