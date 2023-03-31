"use strict";
const number_1 = document.getElementById("number1");
const number_2 = document.getElementById("number2");
const operationElm = document.getElementById("operation");
const answersContent = document.querySelector(".answers");
// -------
const MAX_VALUE = 50; //
const INTERVAL = 20;
const operations = ["-", "+", "*"];

// LOGIC FUNCTIONS
function randomNumber(max, min = 0) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function generateAnswers(correctAnswer) {
	const answers = [correctAnswer];
	for (let i = 1; i <= 3; i++) {
		const answer = randomNumber(correctAnswer + INTERVAL, correctAnswer - INTERVAL);
		answers[i] = answer;
	}

	return answers.sort(() => Math.random() - 0.5);
}

function generateQuestion() {
	const number1 = randomNumber(MAX_VALUE);
	const number2 = randomNumber(MAX_VALUE);
	const operation = operations[randomNumber(operations.length)];
	const correctAnswer = eval(`${number1} ${operation} ${number2}`);
	const answers = generateAnswers(correctAnswer);
	return {
		number1,
		number2,
		operation,
		correctAnswer,
		answers,
	};
}
// RENDER FUNCTIONS

function renderQuestion({ number1, number2, operation, answers, correctAnswer }) {
	number_1.innerText = number1;
	number_2.innerText = number2;
	operationElm.innerText = operation;

	[...answersContent.children].forEach((elm) => elm.remove());
	const fragment = document.createDocumentFragment();
	for (let answer of answers) {
		const answerBtn = document.createElement("button");
		answerBtn.className = "btn";
		answerBtn.innerText = answer;
		const isCorrect = answer === correctAnswer;
		answerBtn.addEventListener("click", () => handleAnswer(answerBtn, isCorrect));
		fragment.appendChild(answerBtn);
	}
	answersContent.appendChild(fragment);
}

// HANDLER FUNCTIONS

function handleAnswer(element, isCorrect) {
	element.classList.add(isCorrect ? "success" : "danger");

	if (isCorrect) {
		setTimeout(init, 2000);
	}
}
function init() {
	const question = generateQuestion();
	renderQuestion(question);
}

init();
