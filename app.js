const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("User hit the server!");
  res.status(200).send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
