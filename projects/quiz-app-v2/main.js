"use strict";
import { randomNumber } from "./utils.js";
const number_1 = document.getElementById("number1");
const number_2 = document.getElementById("number2");
const operationElm = document.getElementById("operation");
const answersContent = document.querySelector(".answers");
const timeElm = document.querySelector(".time");
const levelElm = document.querySelector(".level");
const timedElm = document.querySelector(".timed");
const correctElm = document.querySelector(".correct");
const incorrectElm = document.querySelector(".incorrect");

// -------
const MAX_VALUE = 50; //
const INTERVAL = 20;
const operations = ["-", "+", "*"];
const questions = [];
let question = null;

// LOGIC FUNCTIONS
function generateAnswers(correctAnswer) {
	const answers = [correctAnswer];
	for (let i = 1; i <= 3; i++) {
		const answer = randomNumber(correctAnswer + INTERVAL, correctAnswer - INTERVAL);
		if (answers.includes(answer)) i--;
		else answers[i] = answer;
	}

	return answers.sort(() => Math.random() - 0.5);
}

function generateQuestion() {
	const number1 = randomNumber(MAX_VALUE);
	const number2 = randomNumber(MAX_VALUE);
	const operation = operations[randomNumber(operations.length)];
	const correctAnswer = eval(`${number1} ${operation} ${number2}`);
	const answers = generateAnswers(correctAnswer);
	question = {
		number1,
		number2,
		operation,
		correctAnswer,
		answers,
		status: "timed",
		selectedAnswer: null,
	};
	questions.push(question);

	return question;
}
// RENDER FUNCTIONS

function renderInfo() {
	levelElm.innerText = questions.length;
}

function renderGame({ answers, correctAnswer, ...args }) {
	renderInfo();
	renderQuestion(args);
	renderAnswers(answers, correctAnswer);
}

function renderQuestion({ number1, number2, operation }) {
	number_1.innerText = number1;
	number_2.innerText = number2;
	operationElm.innerText = operation;
}

function renderAnswers(answers, correctAnswer) {
	[...answersContent.children].forEach((elm) => elm.remove());

	const fragment = document.createDocumentFragment();

	for (let answer of answers) {
		const answerBtn = document.createElement("button");
		answerBtn.className = "btn";
		answerBtn.innerText = answer;

		const isCorrect = answer === correctAnswer;

		function handleAnswer() {
			answerBtn.classList.add(isCorrect ? "success" : "danger");
			question.selectedAnswer = answer;
			if (isCorrect) {
				setTimeout(init, 2000);
				question.status = "correct";
			}
		}

		answerBtn.addEventListener("click", handleAnswer);
		fragment.appendChild(answerBtn);
	}

	answersContent.appendChild(fragment);
}

// HANDLER FUNCTIONS

function init() {
	const question = generateQuestion();
	renderGame(question);
}

init();
