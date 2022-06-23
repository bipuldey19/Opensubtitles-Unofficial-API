const express = require("express");
const app = express();

// Website

app.use(express.static('dist'))

// Opensubtittles API search

let normalSearch = require("./routes/normalSearch");
app.use(normalSearch)

// Advanced Search

let advancedSearch = require("./routes/advancedSearch")
app.use(advancedSearch)

// Result page

let result = require("./routes/result")
app.use(result)

app.listen(3000);
