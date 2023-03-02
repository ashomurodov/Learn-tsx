console.log("-------BALLON------");

/**
 * @param {string} colors
 * @param {number[]} times
 * @return {number}
 */
function ballon(colors, times) {}

console.log(ballon("abaac", [1, 2, 3, 4, 5]) === 3);
console.log(ballon("cabbcc", [1, 4, 6, 5, 5, 5]) === 11);
console.log(ballon("abc", [1, 3, 2]) === 0);
console.log(ballon("ccc", [3, 1, 2]) === 4);
