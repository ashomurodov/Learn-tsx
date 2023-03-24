const cards = document.querySelectorAll(".card");
let selected = [];

for (let card of cards) {
	card.addEventListener("click", (e) => {
		card.classList.add("active");

		if (selected.indexOf(card) === -1) selected.push(card);

		const [card1, card2] = selected;

		if (selected.length === 2) {
			setTimeout(() => {
				console.log("hello world");
				card1.classList.remove("active");
				card2.classList.remove("active");
			}, 3000);

			if (card1.innerText === card2.innerText) {
				card1.classList.replace("active", "find");
				card2.classList.replace("active", "find");
				selected = [];
			}
		}

		if (selected.length === 3) {
			card1.classList.remove("active");
			card2.classList.remove("active");
			selected = [card];
		}
	});
}
