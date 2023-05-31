function addByX(x) {
	return function (y) {
		return x + y;
	};
}

const addByTwo = addByX(2);

function once(func) {
	let value;

	return function (num) {
		if (value) return value;

		value = func(num);
		return value;
	};
}

const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6
