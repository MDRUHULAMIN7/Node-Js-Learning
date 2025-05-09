const fs = require("fs");


// sync
// fs.writeFileSync("./test.txt","hey there")

// async
fs.writeFile("./test.txt","hey there asyn", (err) => {})