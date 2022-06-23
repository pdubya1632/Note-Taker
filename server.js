const express = require("express");
const routes = require("./routes/notesRoutes");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static("public"));

// GET for notes & index
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.use("/api", routes);

// GET for 404
app.get("/*", (req, res) => {
  res.status(404).send("OH MY GOD WHAT HAVE YOU DONE???");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
