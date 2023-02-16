const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
let i = 0;
const call = () => {
  console.log("running");
  console.log(i);
  i += 1;
  try {
    setInterval(async () => {
      await axios.put("https://prodigal-ai-backend.onrender.com/");
    }, 24 * 60 * 60 * 1000);
  } catch (err) {
    console.log(err);
  }
};
app.listen(9001, call);
