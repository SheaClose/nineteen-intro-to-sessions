const express = require("express"),
  app = express(),
  cors = require("cors"),
  { json } = require("body-parser"),
  port = 3001,
  isAuthed = require("./middlewares/isAuthed");

app.use(json());
app.use(cors());
app.use("/admin/:password/:userName", isAuthed);
// app.use(() => {
//   console.log(new Date());
// });

app.use(express.static(__dirname + "/../build"));

console.log(__dirname + "/../build");
// app.use((req, res, next) => {
//   console.log("I'm attached to all endpoints");
// });

let people = [
  "Michael",
  "Creed",
  "Dwight",
  "Oscar",
  "Pam",
  "Kevin",
  "Phyllis",
  "Toby"
];

app.get("/admin/:password/:userName/people", (req, res, next) => {
  return res.status(200).json(people);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
