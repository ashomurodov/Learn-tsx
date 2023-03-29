import { getList, createList } from "./utils.js";
const container = document.querySelector(".container");
const startBtn = document.getElementById("start-btn");
const board = document.createElement("div");
let level = 3;
let counter = 3;
let list = createList(counter ** 2);
let answers = getList(list, counter);

// LOGIC FUNCTIONS
startBtn.addEventListener("click", handleStart);
function checkWinner() {
	counter--;

	if (counter === 0) {
		setTimeout(() => {
			level++;
			counter = level;
			list = createList(counter ** 2);
			answers = getList(list, counter);
			renderGame();
		}, 500);
	}
}
// RENDER FUNCTIONS
function renderGame() {
	board.classList.add("board");
	[...board.children].forEach((elm) => elm.remove());

	board.style.gridTemplateColumns = `repeat(${counter}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${counter}, 1fr)`;
	board.style.setProperty("--level", counter);
	for (let item of list) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		board.appendChild(cell);

		const isShow = answers.includes(item);
		if (isShow) cell.classList.add("answer");

		cell.addEventListener("click", handleCell);
	}

	container.appendChild(board);
}

// HANDLE FUNCTIONS
function handleStart(e) {
	e.target.remove();
	renderGame();
}

function handleCell(e) {
	const isCorrect = e.target.classList.contains("answer");
	if (isCorrect) {
		e.target.classList.replace("answer", "active");
		checkWinner();
	} else {
		const answerElements = board.querySelectorAll(".answer");
		answerElements.forEach((elm) => elm.classList.add("active"));
		e.target.classList.add("error");
		board.classList.add("failed");

		const tryBtn = document.createElement("button");
		tryBtn.classList.add("btn");
		tryBtn.innerText = "Try Again";
		tryBtn.addEventListener("click", handleTry);
		container.appendChild(tryBtn);
	}
}

function handleTry(e) {
	e.target.remove();
	board.classList.remove("failed");
	level = 3;
	counter = level;
	list = createList(counter ** 2);
	answers = getList(list, counter);
	renderGame();
}
