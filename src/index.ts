// function createIncrement() {
// 	let counter = 0;

// 	function fn() {
// 		let counter = 20;
// 		counter++;
// 		return counter;
// 	}

// 	return fn;
// }

// const increment = createIncrement();

// increment(); // 1
// increment(); // 1
// increment(); // 1

const summa = (a) => (b) => (c) => (d) => a + b + c + d;

const first = summa(10);
const second = first(20);
const third = second(30);
const result = third(40);

console.log(result);
