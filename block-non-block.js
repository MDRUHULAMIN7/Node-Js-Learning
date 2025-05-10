

const fs = require('fs');

console.log(1);

// non-blocking
// async

fs.readFile('./contacts.txt', 'utf-8', (err, data) => {

    console.log(data)

})

console.log(2);
console.log(3)