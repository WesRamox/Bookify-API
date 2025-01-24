require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')

// Importando as rotas
const bookRoutes = require("./router/book");
const userRoutes = require("./router/user");

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(bookRoutes); // Rotas de livros
app.use(userRoutes); // Rotas de usuários

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.nbcqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(3000);
  })
  .catch((err) => console.log("Erro " + err));