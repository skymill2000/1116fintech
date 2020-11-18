const express = require('express')
const app = express()
 
app.set('views', __dirname + '/views');//랜더링할 파일이 있는 디렉토리 
app.set('view engine', 'ejs'); // 사용하는 뷰 엔진

app.use(express.json()); // JSON 타입의 데이터를 받기위한 설정
app.use(express.urlencoded({ extended: false })); // urlencoded 타입의 데이터를 받기위한 설정

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
    res.send('<html><h1>hello</h1></html>')
})

app.get('/ejs', function(req, res){
  res.render('test');
})

app.post('/getTestData', function(req, res){
  res.json('요청 잘 왔습니다');
})
 
app.listen(3000, function(){
    console.log('서버가 3000번 포트에서 실행중 입니다.');
})
