// import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// initialise express
const app = express();

// root endpoint
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/index.html"));
});

// select the port in which your Node.js web app will run
const port = 5000;

// then listen to the selected port
app.listen(port, () => console.log(`Server is running on port ${port}`));
