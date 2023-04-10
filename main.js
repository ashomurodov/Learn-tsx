/* 10.04.23(61) */

function generateQuestion(questions = [], groups = []) {
	const result = {};

	for (let group of groups) {
		result[group] = questions.splice(0, 13);
	}

	return result;
}

const groups = ["ayubs", "sardors", "lazy-developers", "azimjons", "mirafzals", "murodils"];
const questions = new Array(78)
	.fill()
	.map((a, idx) => idx + 1)
	.sort(() => Math.random() - 0.5);

console.log(generateQuestion(questions, groups));
