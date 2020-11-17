const request = require('request');
var parseString = require('xml2js').parseString;

var url = "http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109";
request(url, function (error, response, body) {
    parseString(body, function (err, result) {
        console.dir(result.rss.channel[0].item[0].description[0].header[0].wf[0]);
        //#work4 예보정보 wf 안에 있는 데이터를 출력
    });   
});
