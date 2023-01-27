// -------- Calling | Running | Invoking function

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// var a = 20;

// function app() {
// 	if (a) console.log(a);

// 	var a = 40;
// 	console.log(a);
// }

// app();

// function app() {
// 	if (a) console.log(a);

// 	let b = 20;
// 	console.log(b);
// }

// let a = 50;
// app();

//------- Function inside function
// function cutPieces(fruit) {
// 	return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// 	const applePieces = cutPieces(apples);
// 	const orangePieces = cutPieces(oranges);

// 	const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;

// 	return juice;
// }
// console.log(fruitProcessor(2, 3));
