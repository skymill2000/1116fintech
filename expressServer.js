const express = require('express')
const app = express()
const request = require('request');
const jwt = require('jsonwebtoken');
const auth = require('./lib/auth');

//------------------database 연결 ----------------------
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //서버의 주소
  user     : 'root', // 접근 계정 이름
  password : '1q2w3e4r', // 계정 비밀번호
  database : 'fintech1116' // 데이터베이스 이름
});
connection.connect();
//------------------database 연결 ----------------------

app.set('views', __dirname + '/views');//랜더링할 파일이 있는 디렉토리 
app.set('view engine', 'ejs'); // 사용하는 뷰 엔진

app.use(express.json()); // JSON 타입의 데이터를 받기위한 설정
app.use(express.urlencoded({ extended: false })); // urlencoded 타입의 데이터를 받기위한 설정

app.use(express.static(__dirname + '/public')); //디자인 파일이 위치할 정적 요소들을 저장하는 디렉토리

var clientId = "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF" // 클라이언트 아이디 변경
var clientSecret = "yVT6irMr2h4ZTHzZY7sDpbvhm1nlOzr4nP7DYRVy" // 클라이언트 시크릿 변경

app.get('/test', function(req, res){
  res.json('로그인 된 사용자가 보는 화면');
})

app.get('/signup', function(req, res){
  res.render('signup');
})

app.get('/login', function(req, res){
  res.render('login');
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
  var insertUserSql = "INSERT INTO user (`name`, `email`, `accesstoken`, `refreshtoken`, `userseqno`, `password`) VALUES (?, ?, ?, ?, ?, ?)"
  connection.query(insertUserSql,[userName, userEmail, userAccessToken, userRefreshToken, userSeqNo, userPassword], function (error, results, fields) {
    if (error) throw error;
    else {
      res.json(1);
    }
  });
})

app.post('/login', function(req, res){
  var userEmail = req.body.userEmail;
  var userPassword = req.body.userPassword;
  var searchEmailSql = "SELECT * FROM user WHERE email = ?";
  connection.query(searchEmailSql,[userEmail, userPassword], function (error, results, fields) {
    if (error) throw error;
    else {
      if(results.length == 0){
        res.json("회원이 존재하지 않습니다")
      }
      else {
        var storedUserPassword = results[0].password;
        if(storedUserPassword == userPassword){
          //로그인 완료
          var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";
          jwt.sign(
            {
              userId: results[0].id,
              userEmail: results[0].email,
            },
            tokenKey,
            {
              expiresIn: "10d",
              issuer: "fintech.admin",
              subject: "user.login.info",
            },
            function (err, token) {
              console.log("로그인 성공", token);
              res.json(token);
            }
          );

        }
        else {
          res.json("비밀번호를 잘못 입력했습니다");
          //로그인 실패
        }
      }
    }
  });
})

app.listen(3000, function(){
    console.log('서버가 3000번 포트에서 실행중 입니다.');
})
