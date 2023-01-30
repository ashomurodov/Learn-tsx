//------- Function inside function
function cutPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutPieces(apples);
	const orangePieces = cutPieces(oranges);

	const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;

	return juice;
}
console.log(fruitProcessor(2, 3));

// Function Parameters
// function app(aa, b, c) {}

// let _a = 10;
// // Function Arguments
// const result = app(_a, 20, 30);
