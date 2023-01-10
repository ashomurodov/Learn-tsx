/**
 *
 * @param {string} char
 * @returns {boolean}
 */
function isLetter(char) {
	return char.length === 1 && char.match(/[a-z]/i);
}

/**
 *
 * @param {string} str
 * @returns {string}
 */

function find(str) {}

console.log(find("a2bc10d22bc-23avv-2"), 9);
console.log(find("bca2-2b2"), 2);
console.log(find("dbcc10b100-200b200"), 110);
console.log(find(""), 0);
console.log(find("-10-10-10a10-20b10-10"), -40);
