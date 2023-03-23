"use strict";
/*----------- 22.03.23(53)--------- */
const container = document.querySelector(".container");
const game = document.querySelector(".game").cloneNode(true);

const positions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function addListeners() {
	for (let game of games) {
		const cells = game.querySelectorAll(".cell");
		const winnerElm = game.querySelector(".winner");
		const board = new Array(9).fill(NaN);
		let currentPlayer = "X";
		let winnerExist = false;

		function checkWinner() {
			for (let position of positions) {
				const [x, y, z] = position;
				if (board[x] === board[y] && board[y] === board[z]) return true;
			}
		}

		cells.forEach((cell, idx) => {
			cell.addEventListener("click", () => {
				const value = cell.innerText;
				if (!winnerExist && !value) {
					board[idx] = currentPlayer;
					cell.innerText = currentPlayer;
					winnerExist = checkWinner();
					if (winnerExist) {
						winnerElm.innerText = `Winner: ${currentPlayer}`;
					}

					currentPlayer = currentPlayer === "X" ? "O" : "X";
				}
			});
		});
	}
}

function init() {
	for (let i = 0; i < 5; i++) {
		container.appendChild(game);
	}
}

init();
