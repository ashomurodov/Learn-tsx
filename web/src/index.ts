function delay(time: number) {
	return new Promise((res) => {
		setTimeout(() => res(20), time);
	});
}

interface User {
	id: string;
	name: string;
	username: string;
	email: string;
}

const endPoint = "https://jsonplaceholder.typicode.com/users";

window.addEventListener("load", async () => {
	await delay(5000); // fake delay
	const res = await fetch(endPoint);
	const users = (await res.json()) as User[];
	renderUsers(users);
});

function renderUsers(users: User[]) {
	const usersElm = document.createElement("ul");

	for (let { name, username, email, id } of users) {
		const li = document.createElement("li");

		li.innerHTML = `<span>${name}</span><span>${username}</span>`;

		const anchor = document.createElement("a");
		anchor.innerText = "👁️";
		anchor.href = `/public/user.html?id=${id}`;

		li.appendChild(anchor);

		usersElm.appendChild(li);
	}

	document.body.children[0].remove();
	document.body.appendChild(usersElm);
}
