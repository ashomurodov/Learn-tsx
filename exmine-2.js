/**
 *
 * @param {string} char
 * @returns {boolean}
 */
function checkLetter(char) {
	return char.length === 1 && char.match(/[a-z]/i);
}

/**
 * Cases :
 *
 * find("a2bc10d22bc-23avv-2") -> 9
 * find("bca2-2b2") -> 2
 * find("dbcc10b100-200b200") -> 110
 * find("") -> 0
 * find("-10-10-10a10-20b10-10") -> -40
 */

console.log(find("a2bc10d22bc-23avv-2")); //
console.log(find("bca2-2b2")); // 6
console.log(find("dbcc10b100-200b200")); // 6
console.log(find("")); // 0
console.log(find("-10-10-10a10-20b10-10")); // 8

/**
 *
 * @param {string} str = 'a2bc10d22bc-23avv-2'
 * @returns {string}
 */
function find(str) {
	let result = 0;
	let temp = "";

	for (let i = 0; i < str.length; i++) {
		let char = str.charAt(i);
		let isLetter = checkLetter(char);
		let isNegative = char === "-";
		let isNumber = !isLetter && !isNegative;
		let isLast = i === str.length - 1;

		if (isNumber) temp += char;
		else {
			result += +temp;
			temp = isLetter ? "" : "-";
		}
	}

	result += +temp;
	return result;
}
