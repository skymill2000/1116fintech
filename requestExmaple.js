const request = require('request');
request('http://newsapi.org/v2/top-headlines?country=kr&category=health&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5', function (error, response, body) {
  console.log('body:', body); 
});
