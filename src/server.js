require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const router = require("./router")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)

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