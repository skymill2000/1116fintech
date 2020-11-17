function multi(p1, p2) {
	return p1 * p2; // p1, p2 곱연산의 결과를 반환한다.
}

function plus(p1, p2) {
	return p1 + p2; // p1, p2 곱연산의 결과를 반환한다.
}

function minus(p1, p2) {
	return p1 - p2; // p1, p2 곱연산의 결과를 반환한다.
}

function div(p1, p2) {
	return p1 / p2; // p1, p2 곱연산의 결과를 반환한다.
}
//#work 1 더하기, 나누기, 빼기 기능 작성
//es6
const div2 = (p1, p2) =>{
    return p1 / p2;
}

console.log(multi(2,6));
console.log(div2(6,6));
console.log(plus(6,6));
console.log(minus(6,6));