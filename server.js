const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const data = require("data.json");

app.get("/events", (req, res) => {
  res.json(data.events);
});

app.get("/events/:name", (req, res) => {
  const event = data.events.find(e => e.id === req.params.name);
  res.json(event);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
