const express = require('express')
const app = express()
const request = require('request');

app.set('views', __dirname + '/views');//랜더링할 파일이 있는 디렉토리 
app.set('view engine', 'ejs'); // 사용하는 뷰 엔진

app.use(express.json()); // JSON 타입의 데이터를 받기위한 설정
app.use(express.urlencoded({ extended: false })); // urlencoded 타입의 데이터를 받기위한 설정

app.use(express.static(__dirname + '/public')); //디자인 파일이 위치할 정적 요소들을 저장하는 디렉토리

var clientId = "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF" // 클라이언트 아이디 변경
var clientSecret = "yVT6irMr2h4ZTHzZY7sDpbvhm1nlOzr4nP7DYRVy" // 클라이언트 시크릿 변경

app.get('/test', function(req, res){
  res.render('blank');
})


app.get('/signup', function(req, res){
  res.render('signup');
})

app.get('/authResult', function(req, res){
  var authCode = req.query.code;
  console.log("인증코드 : ", authCode)
  var option = {
    method : "POST",
    url : "https://testapi.openbanking.or.kr/oauth/2.0/token",
    headers : {
      "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
    },
    form : {
      code : authCode,
      client_id : clientId,
      client_secret : clientSecret,
      redirect_uri : "http://localhost:3000/authResult",
      grant_type : "authorization_code"
    }
  }
  request(option, function (error, response, body) {
    var accessRequestResult = JSON.parse(body);
    console.log(accessRequestResult);
    res.render("resultChild", { data: accessRequestResult });
  });
})

app.post('/signup', function(req, res){
  console.log(req.body);
  var userName = req.body.userName;
  var userPassword = req.body.userPassword;
  var userEmail = req.body.userEmail;
  var userAccessToken = req.body.userAccessToken;
  var userRefreshToken = req.body.userRefreshToken;
  var userSeqNo = req.body.userSeqNo;

  
})

app.listen(3000, function(){
    console.log('서버가 3000번 포트에서 실행중 입니다.');
})
