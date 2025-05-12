🌟 কেন আমরা Raw Node.js এর পরিবর্তে Express ব্যবহার করবো?
🧠 Raw Node.js-এর সমস্যা
Raw Node.js দিয়ে একটি সার্ভার তৈরি করতে গেলে আমাদের অনেক কিছু নিজে নিজে কোড করতে হয়, যেমন:

URL এবং query string নিজে পার্স করতে হয়

Routing  নিজে হ্যান্ডেল করতে হয়

Response headers এবং JSON নিজে ফরম্যাট করতে হয়

প্রতিটি রুটের জন্য আলাদা করে error হ্যান্ডলিং করতে হয়

Middleware (যেমন authentication, logging ইত্যাদি) নিজে ম্যানেজ করতে হয়

⛔ বড় অ্যাপ্লিকেশনের ক্ষেত্রে Raw Node.js দিয়ে কাজ করা কঠিন ও পুনরাবৃত্তিমূলক হয়ে যায়।

✅ Express.js কী?
🟢 Express.js হলো একটি minimal এবং flexible Node.js web framework, যা দিয়ে খুব সহজে শক্তিশালী API এবং web server তৈরি করা যায়।

📦 এটি Node.js এর উপর তৈরি এবং HTTP request, routing, middleware ইত্যাদি হ্যান্ডল করা অনেক সহজ করে দেয়।

🛠️ Express কীভাবে কাজ করে 
ক্লায়েন্ট একটি request পাঠায় (GET/POST/PUT/DELETE)

Express সেই request গ্রহণ করে app.get(), app.post() ইত্যাদির মাধ্যমে

Express route এবং middleware চেক করে

Server সেই অনুরোধ প্রক্রিয়া করে এবং response পাঠায়

📦 উদাহরণ: Raw Node.js বনাম Express.js
🆗 Raw Node.js:
js
Copy
Edit
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/about' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  }
});

server.listen(3000);
✅ Express.js (অনেক বেশি পরিষ্কার ও সহজ):
js
Copy
Edit
const express = require('express');
const app = express();

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3000);
🔥 কেন Express ব্যবহার করবো?
ফিচার	Raw Node.js	Express
Routing system	নিজে করতে হয়	বিল্ট-ইন ও শক্তিশালী
Middleware support	নিজে লিখতে হয়	সহজে ব্যবহারযোগ্য
Request parsing	নিজে করতে হয় (যেমন query string)	express.json() দিয়ে সহজে করা যায়
Response handling	নিজে headers ও content-type সেট করতে হয়	শুধু res.send() বা res.json() ব্যবহার করলেই হয়
Error handling	জটিল	Middleware দিয়ে সহজে করা যায়
কোড রিডেবিলিটি	বড় অ্যাপে কোড জটিল হয়	পরিচ্ছন্ন ও মডুলার

But end of the express is a only framework on Node 
