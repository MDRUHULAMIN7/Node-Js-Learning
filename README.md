# 📂 Node.js File Handling (বাংলায়)


## ✅ File System মডিউল ইমপোর্ট
```js
const fs = require("fs");
📝 ফাইল তৈরি করা (Create File)
Sync:

js
Copy
Edit
fs.writeFileSync("./test.txt", "hey there");
Async:

js
Copy
Edit
fs.writeFile("./test.txt", "hey there async", (err) => {});
📖 ফাইল পড়া (Read File)
Sync:

js
Copy
Edit
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);
Async:

js
Copy
Edit
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
➕ ফাইলে লেখা যোগ করা (Append File)
js
Copy
Edit
fs.appendFileSync("./test.txt", `Ruhul\n`);
📋 ফাইল কপি করা (Copy File)
Sync:

js
Copy
Edit
fs.copyFileSync("./test.txt", "./copy.txt");
Async:

js
Copy
Edit
fs.copyFile("./test.txt", "./copy.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file copied");
});
❌ ফাইল ডিলিট করা (Delete File)
js
Copy
Edit
fs.unlinkSync("./test.txt");
📁 ফোল্ডার তৈরি করা (Make Folder)
js
Copy
Edit
fs.mkdirSync("./my-docs");
ℹ️ ফাইল/ফোল্ডারের তথ্য দেখা (Stats)
js
Copy
Edit
const stats = fs.statSync("./contacts.txt");
console.log(stats);
