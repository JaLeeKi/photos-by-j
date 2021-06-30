const express = require("express");
const cors = require("cors");
const app = express();

const {} = require("./serverController.js")

app.use(cors());
app.use(express.json());




app.listen(5432, () => console.log("Server breathing on 5432"));