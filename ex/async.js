var fs = require('fs');

console.log('첫번째')

fs.readFile('./example/test.txt', 'utf8', function (err, result) {
    if (err) {
        console.error(err);
        throw err;
    }
    else {
        console.error("두번째");
        console.log(result);
        console.log('마지막')
    }
});


