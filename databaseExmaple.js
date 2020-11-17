var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost', //서버의 주소
  user     : 'root', // 접근 계정 이름
  password : '1q2w3e4r', // 계정 비밀번호
  database : 'fintech1116' // 데이터베이스 이름
});
 
connection.connect();
 
connection.query('SELECT * FROM fintech1116.user', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();
