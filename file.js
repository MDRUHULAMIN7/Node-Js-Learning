const fs = require("fs");

// how to create file
// sync
fs.writeFileSync("./test.txt","hey there")

// async
fs.writeFile("./test.txt","hey there asyn", (err) => {})


// how to read file
// sync

const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

// async
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});