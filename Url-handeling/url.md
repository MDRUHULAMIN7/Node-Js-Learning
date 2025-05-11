নোড.জেএস-এ URL


![alt text](image.png)

১. URL হ্যান্ডল করা
URL হলো একটি ওয়েব এড্রেস যা বিভিন্ন অংশে বিভক্ত যেমন: প্রোটোকল (http/https), হোস্ট, পোর্ট, পাথ, কুয়েরি প্যারামিটার ইত্যাদি। নোড.জেএস-এ url মডিউল ব্যবহার করে সহজেই URL পার্স করা যায়।

JavaScript
const url = require('url');

const myUrl = new URL('https://example.com:8000/path/to/resource?name=John&age=30');

// URL এর বিভিন্ন অংশ আলাদা করা
console.log(myUrl.protocol); // https:
console.log(myUrl.host); // example.com:8000
console.log(myUrl.pathname); // /path/to/resource
console.log(myUrl.search); // ?name=John&age=30
console.log(myUrl.searchParams.get('name')); // John
২. পাথ হ্যান্ডল করা
নোড.জেএস-এ পাথ ম্যানিপুলেশনের জন্য path মডিউল ব্যবহার করা হয়। এটি ফাইল বা ডিরেক্টরির পাথ সংক্রান্ত কাজ সহজ করে।

JavaScript
const path = require('path');

// পাথ জয়েন করা
const filePath = path.join(__dirname, 'folder', 'file.txt');
console.log(filePath);

// ফাইলের এক্সটেনশন বের করা
const extension = path.extname(filePath);
console.log(extension); // .txt

// পাথ থেকে ফাইলের নাম বের করা
const fileName = path.basename(filePath);
console.log(fileName); // file.txt
৩. নেস্টেড পাথ হ্যান্ডল করা
নেস্টেড পাথ হলো এমন পাথ যা একাধিক ফোল্ডারের মধ্যে অবস্থিত। এটি ম্যানুয়ালি হ্যান্ডেল করার বদলে path মডিউল দিয়ে সহজেই ম্যানেজ করা যায়।

JavaScript
const nestedPath = path.join('folder1', 'folder2', 'folder3', 'file.txt');
console.log(nestedPath); // folder1/folder2/folder3/file.txt
৪. কুয়েরি প্যারামিটার হ্যান্ডল করা
কুয়েরি প্যারামিটার হলো URL-এর সেই অংশ যা ? দিয়ে শুরু হয়। আপনি URL মডিউল বা querystring মডিউল ব্যবহার করে কুয়েরি প্যারামিটার হ্যান্ডেল করতে পারেন।

URL মডিউল ব্যবহার করে:
JavaScript
const myUrl = new URL('https://example.com?name=John&age=30');

console.log(myUrl.searchParams.get('name')); // John
console.log(myUrl.searchParams.get('age')); // 30

// কুয়েরি প্যারামিটার যোগ করা
myUrl.searchParams.append('country', 'Bangladesh');
console.log(myUrl.href); // https://example.com/?name=John&age=30&country=Bangladesh
querystring মডিউল ব্যবহার করে:
JavaScript
const querystring = require('querystring');

const query = 'name=John&age=30';
const parsedQuery = querystring.parse(query);

console.log(parsedQuery.name); // John
console.log(parsedQuery.age); // 30
৫. একটি উদাহরণ (Express.js ব্যবহার করে)
Express.js ফ্রেমওয়ার্ক দিয়ে আপনি এই কাজগুলো আরও সহজে করতে পারেন।

JavaScript
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    // পাথ প্যারামিটার
    const userId = req.params.id;

    // কুয়েরি প্যারামিটার
    const name = req.query.name;

    res.send(`User ID: ${userId}, Name: ${name}`);
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
উদাহরণ: যদি আপনি ব্রাউজারে http://localhost:3000/user/123?name=John দেন, আউটপুট হবে: User ID: 123, Name: John

