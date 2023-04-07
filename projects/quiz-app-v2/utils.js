export function randomNumber(max, min = 0) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export function interval(callback, time) {
	const intervalId = setInterval(callback, time);

	function clear() {
		clearInterval(intervalId);
	}

	return clear;
}
