var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi", "소나타",'페라리'];
var text = "";
var i;

for (i = 0; i < cars.length; i++) {	
	text += cars[i];
}

// es6 map func 활용 예제
// cars.map((car)=>{
//     console.log(car);
// })

console.log(text);
