
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express Home page");
});
app.get("/about", (req, res) => {
  res.send("Hello from express About page " + "  hey " +   req.query.name   +   "  Iam  " +   req.query.age);
});


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});