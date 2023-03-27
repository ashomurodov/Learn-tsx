// const wrapper = document.querySelector(".wrapper");
// const icons = ["🎁", "🤪", "😘", "😎", "🎉", "🍓", "👀", "🍒", "🎁", "🤪", "😘", "😎", "🎉", "🍓", "👀", "🍒"].sort(() => Math.random() - 0.5);
// let selected = [];
// let timeoutID;

// function addCards() {
// 	const fragment = new DocumentFragment();

// 	for (let icon of icons) {
// 		const card = document.createElement("div");
// 		card.classList.add("card");
// 		card.classList.add("active");
// 		card.innerText = icon;
// 		fragment.appendChild(card);
// 	}

// 	wrapper.appendChild(fragment);
// 	const cards = Array.from(wrapper.children);

// 	setTimeout(() => {
// 		for (let card of cards) {
// 			card.classList.remove("active");
// 		}
// 	}, 1500);

// 	return cards;
// }

// function init() {
// 	const cards = addCards();

// 	for (let card of cards) {
// 		card.addEventListener("click", (e) => {
// 			card.classList.add("active");
// 			if (selected.indexOf(card) === -1) selected.push(card);

// 			if (selected.length === 2) {
// 				const [card1, card2] = selected;

// 				timeoutID = setTimeout(() => {
// 					card1.classList.remove("active");
// 					card2.classList.remove("active");
// 					selected = [];
// 				}, 3000);

// 				if (card1.innerText === card2.innerText) {
// 					card1.classList.replace("active", "find");
// 					card2.classList.replace("active", "find");
// 					selected = [];
// 				}
// 			}

// 			if (selected.length === 3) {
// 				clearTimeout(timeoutID);

// 				const [card1, card2] = selected;
// 				card1.classList.remove("active");
// 				card2.classList.remove("active");
// 				selected = [card];
// 			}
// 		});
// 	}
// }

// init();

setTimeout(() => {
	console.log("First");
}, 0);

for (let i = 0; i < 100; i++) {
	console.log("i  = ", i);
}

setTimeout(() => {
	console.log("Third");
}, 0);

console.log("Second");
