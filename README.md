📦 Node.js Module, require, এবং exports — বাংলা সারাংশ ✅
🧠 মডিউল কী?
Node.js-এ একটি ফাইল নিজেই একটি মডিউল। তুমি একটি ফাইলে ফাংশন, অবজেক্ট, বা ভ্যালু লিখে অন্য ফাইল থেকে সেটা ব্যবহার করতে পারো। এর ফলে কোড ছোট ছোট ভাগে ভাগ করে reusable ও maintainable করা যায়।

📤 কিভাবে Export করতে হয়?
➤ ১. একাধিক ফাংশন একসাথে module.exports দিয়ে export:
js
Copy code
// math.js
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = { add, sub };
➤ ২. আলাদাভাবে exports দিয়ে export:
js
Copy code
// math.js
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
📥 কিভাবে অন্য ফাইলে import বা require করবে:
js
Copy code
// index.js
const { add, sub } = require('./math');

console.log(add(2, 3)); // Output: 5
console.log(sub(5, 2)); // Output: 3
🔁 যদি exports.multiply বা exports.divide দিয়েও ফাংশন পাঠাও, তাহলে সেগুলো এইভাবে পাবে:

js
Copy code
const { multiply, divide } = require('./math');

console.log(multiply(4, 5)); // Output: 20
