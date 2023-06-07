function summa(a, b, operation) {
	return {
		first: a,
		second: b,
		result: eval(`${a} ${operation} ${b}`),
	};
}

module.exports = { summa };

// export function summa() {} // ES Module (Front-End)
