
import express, { json, static, urlencoded } from "express";
const app = express();

// const path = require("path");
// const fs = require('fs');
// const { readFile } = require("fs").promises;
// const util = require("util");

// create app and assign port


// middleware
// app.use(json());
// app.use(static("public"));
// app.use(urlencoded({ extended: true }));
// app.use(static(path.join(__dirname, "../public")));

// GET request for api notes route
app.get("/api/notes", (req, res) => {
  // readFileAsync('./db/db.json', 'utf-8').then((data) =>{
  //     const notes = [].concat(JSON.parse(data));
  //     res.json(notes);
  // })
  // readFile('./db/db.json', { encoding: "utf8" })
  // .then(data => console.log(data));
});

// POST request for api notes route

// DELETE request for api notes route

// GET request routes : wildcard fallback
// app.get("/*", (req, res) =>
//   res.sendFile(path.join(__dirname, "./public/index.html"))
// );

// GET request routes for index and notes
app.get('/', function (req, res) {
    res.send('Index')
});

app.get('/notes', function (req, res) {
    res.send('Notes');
});

// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "./public/index.html"))
// );

// app.get("/notes", (req, res) =>
//   res.sendFile(path.join(__dirname, "./public/notes.html"))
// );

// Port started message
app.listen(3001, () =>
  console.log(`Example app listening at http://localhost:3001`)
);
