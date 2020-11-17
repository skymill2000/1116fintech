var fs = require('fs');
console.log('첫번째');
console.log("두번째");
var result = fs.readFileSync('./example/test.txt', 'utf8');
console.log(result);
console.log('마지막');
