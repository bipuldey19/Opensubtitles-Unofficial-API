const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

// Opensubtittles API search

let search = require("./routes/search");
app.use(search);

// Result page

let result = require("./routes/result");
app.use(result);

app.use(express.static("dist"));
app.use(cors());

app.listen(PORT);
