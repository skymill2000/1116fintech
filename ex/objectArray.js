var car1 = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var car2 = {
    name : "bmw",
	ph : "500ph",
	start : function () {
        console.log('insert keys');
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var car3 = {
    name : "fiat",
	ph : "500ph",
	start : function () {
        console.log('insert keys');
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}


var cars = [car1, car2];
console.log(cars);


//work2 자동차 2번째 요소에 이름을 출력하세요;
console.log(cars[1].name);

//work3 자동차 이름이 bmw 가 있으면 '!' 출력해주세요; (for / if) 
for(var i = 0; i < cars.length; i++){
    var car = cars[i];
    if(car.name == "bmw"){
        console.log("!");
    }
}
