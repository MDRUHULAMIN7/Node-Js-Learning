📌 ৪. Node.js HTTP সার্ভার তৈরি, রেসপন্স এবং লগ সংরক্ষণ (উদাহরণসহ)নিচের কোডটি একটি সাধারন Node.js HTTP সার্ভার তৈরি করে, যেটি প্রতিটি রিকোয়েস্টের সময় একটি লগ ফাইল (log.txt) এ লগ সংরক্ষণ করে এবং ইউজারকে একটি রেসপন্স দেয়।
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: new req received\n`

    fs.appendFile('log.txt', log, (err, data) => {
        res.end("Hello from server");
    });
});

myServer.listen(8000, () => {
    console.log("server is running on port 8000");
});কোড ব্যাখ্যা:http.createServer():
একটি HTTP সার্ভার তৈরি করে।
fs.appendFile():
প্রতিবার রিকোয়েস্ট আসলে log.txt ফাইলে নতুন একটি লগ লিখে।
res.end():
ইউজারকে “Hello from server” মেসেজ পাঠিয়ে রেসপন্স শেষ করে।
listen(8000):
সার্ভার 8000 পোর্টে রিকোয়েস্ট শুনছে।
