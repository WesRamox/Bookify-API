const express = require("express")

const app = express()
const router = ("./router")


app.use(express.json())

app.use(router)

app.listen(3000)