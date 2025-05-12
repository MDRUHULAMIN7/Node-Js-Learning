# 🌐 URL ব্যাখ্যা এবং Node.js দিয়ে URL হ্যান্ডেলিং |



## 🔍 URL কী?

🔹 **URL** এর পূর্ণরূপ: **Uniform Resource Locator**  
🔹 এটি হলো ইন্টারনেটে কোনো নির্দিষ্ট পেজ, ফাইল, বা রিসোর্সের ঠিকানা।

🧪 উদাহরণ:
https://www.linkedin.com/in/ruhul7


## 🧩 URL এর অংশসমূহ

### 1️⃣ Protocol:
- উদাহরণ: `https://`
- এটি ব্রাউজার ও সার্ভারের মধ্যে যোগাযোগের নিয়ম নির্ধারণ করে।
- এখানে `https` মানে **Secure HTTP**, অর্থাৎ তথ্য এনক্রিপ্টেড হয়।

🔐 **Full Form of HTTPS**: **HyperText Transfer Protocol Secure**  
🔒 এটি সুরক্ষিত যোগাযোগের জন্য ব্যবহৃত হয়, যেমন: পেমেন্ট, লগইন, ব্যক্তিগত তথ্য।

---

### 2️⃣ Domain Name:
- উদাহরণ: `www.linkedin.com`
- এটি হলো ওয়েবসাইটের নাম বা ঠিকানা।

### 3️⃣ Path:
- উদাহরণ: `/in/ruhul7`
- ওয়েবসাইটের ভিতরে কোন নির্দিষ্ট রিসোর্স বা পেইজে যেতে চাচ্ছি তা নির্দেশ করে।

### 4️⃣ Query:
- উদাহরণ: `?id=5&category=watch`
- অতিরিক্ত তথ্য URL-এর মাধ্যমে পাঠানো হয়।
- এটি `?` দিয়ে শুরু হয় এবং `key=value` ফর্মে থাকে।

---

## ✅ সারাংশ (সংক্ষেপে)

| অংশ | উদাহরণ | ব্যাখ্যা |
|------|--------|----------|
| **Protocol** | `https://` | তথ্য কিভাবে ট্রান্সফার হবে |
| **Domain** | `www.linkedin.com` | ওয়েবসাইটের ঠিকানা |
| **Path** | `/in/ruhul7` | কোন পেইজে যাচ্ছি |
| **Query** | `?id=5` | অতিরিক্ত তথ্য |

---

## 🛠️ Node.js দিয়ে URL হ্যান্ডেল

```js
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ path, query }));
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
