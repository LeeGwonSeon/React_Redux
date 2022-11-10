const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://LoganLee2:Aggwy9L8yxROJT64@cluster0.vbq5jzp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("This is React-Redux Study!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
