const baseURL = "http://localhost:8000/api/users";
const TIME = 500;
const delay = (time: number) => new Promise((res) => setTimeout(() => res(20), time));

export const userServices = {
	users: async () => {
		const res = await fetch(baseURL);
		await delay(TIME);
		return res.json();
	},
	create: async (user: any) => {
		const res = await fetch(baseURL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		});
		await delay(TIME);
		return res.json();
	},
	update: async (userID: string, newUser: any) => {
		const res = await fetch(`${baseURL}/${userID}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newUser),
		});
		await delay(TIME);
		return res.json();
	},
};
