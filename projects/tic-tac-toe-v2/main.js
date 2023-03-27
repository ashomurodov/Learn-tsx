const game = document.querySelector(".game");
const controller = document.querySelector(".controller");

let step = 0;
const histories = [[null, null, null, null, null, null, null, null, null]];

// LOGIC FUNCTIONS
function nextPlayer() {
	const nextPlayer = step % 2 === 0 ? "X" : "O";
	step++;
	return nextPlayer;
}

// RENDER FUNCTIONS

function renderGame() {
	[...game.children].forEach((elm) => elm.remove());

	const currentHistory = histories[step]; // [null, null, null, "X", "X", "X", null, null, null]
	const board = document.createElement("div");
	board.className = "board";

	for (let i = 0; i < currentHistory.length; i++) {
		const item = currentHistory[i];
		const cell = document.createElement("div");
		cell.innerText = item;
		cell.classList.add("cell");
		if (item) cell.classList.add("disabled");
		cell.addEventListener("click", () => handleCell(i));
		board.appendChild(cell);
	}

	const resetBtn = document.createElement("button");
	resetBtn.innerText = "Reset Game";
	resetBtn.className = "btn";
	resetBtn.addEventListener("click", handleReset);

	game.append(board, resetBtn);
}

function renderHistories() {
	[...controller.children].forEach((elm) => elm.remove());

	const fragment = document.createDocumentFragment();
	for (let i = 0; i < histories.length; i++) {
		const isCurrent = step === i;
		const historyBtn = document.createElement("button");
		historyBtn.classList.add("btn");

		if (i === 0) historyBtn.innerText = "Go to game start";
		else {
			historyBtn.innerText = `Go to move #${i}`;
		}

		if (isCurrent) {
			historyBtn.innerText += " (Current)";
			historyBtn.classList.add("disabled");
		}

		historyBtn.addEventListener("click", () => handleHistory(i));
		fragment.appendChild(historyBtn);
	}

	controller.appendChild(fragment);
}

// HANDLE FUNCTIONS
function handleHistory(idx) {
	step = idx;
	renderGame();
	renderHistories();
}

function handleReset() {
	console.log("clicked reset btn");
}

function handleCell(idx) {
	const lastHistory = histories[step];
	const player = nextPlayer();

	const nextHistory = histories[step];

	if (nextHistory) {
		histories.splice(step);
	}

	const currentHistory = [...lastHistory];
	currentHistory[idx] = player;
	histories.push(currentHistory);

	renderGame();
	renderHistories();
}

renderGame();
renderHistories();
