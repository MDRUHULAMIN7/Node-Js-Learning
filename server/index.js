const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express Home page");
});
app.get("/about", (req, res) => {
  res.send("Hello from express About page");
});

const myServer = http.createServer(app);

    


myServer.listen(8000,()=>{
    console.log("server is running on port 8000");
})