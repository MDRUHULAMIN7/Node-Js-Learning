const fs = require("fs");

// how to create file
// sync
// fs.writeFileSync("./test.txt","hey there")

// async
// fs.writeFile("./test.txt","hey there asyn", (err) => {})


// how to read file
// sync

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// async
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

// how to apend file

// fs.appendFileSync("./test.txt",`Ruhul\n`);



// how to copy file

// sync
// fs.copyFileSync("./test.txt", "./copy.txt");

// async
// fs.copyFile("./test.txt", "./copy.txt", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("file copied");
// });

// how to delete file
// fs.unlinkSync("./test.txt");

// how make folder

fs.mkdirSync("./my-docs");
