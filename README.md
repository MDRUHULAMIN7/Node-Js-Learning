# 📂 Node.js File Handling (বাংলায়)


## ✅ File System মডিউল ইমপোর্ট
const fs = require("fs");

📝 ফাইল তৈরি করা (Create File)
✅ Sync:

fs.writeFileSync("./test.txt", "hey there");
✅ Async:


fs.writeFile("./test.txt", "hey there async", (err) => {});
📖 ফাইল পড়া (Read File)
✅ Sync:


const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);
✅ Async:


fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
➕ ফাইলে লেখা যোগ করা (Append File)

fs.appendFileSync("./test.txt", `Ruhul\n`);
📋 ফাইল কপি করা (Copy File)
✅ Sync:


fs.copyFileSync("./test.txt", "./copy.txt");
✅ Async:

fs.copyFile("./test.txt", "./copy.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("file copied");
});
❌ ফাইল ডিলিট করা (Delete File)

fs.unlinkSync("./test.txt");
📁 ফোল্ডার তৈরি করা (Make Folder)

fs.mkdirSync("./my-docs");
ℹ️ ফাইল/ফোল্ডারের তথ্য দেখা (Stats)

const stats = fs.statSync("./contacts.txt");
console.log(stats);
