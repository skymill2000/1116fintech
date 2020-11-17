const request = require('request');
var parseString = require('xml2js').parseString;

var url = "http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109";
request(url, function (error, response, body) {
    parseString(body, function (err, result) {
        console.dir(result);
    });   
});
