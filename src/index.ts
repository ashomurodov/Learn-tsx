// import { userServices } from "./services/users";

// const getUsersBtn = document.querySelector<HTMLButtonElement>("#get_users_btn")!;
// const updateUserBtn = document.querySelector<HTMLButtonElement>("#update_user_btn")!;
// const addUserBtn = document.querySelector<HTMLButtonElement>("#add_user_btn")!;

// const mockUser = {
// 	username: "Arslonbek",
// 	avatarURL: "https://avatars.googleusercontent.com",
// 	address: "Tashkent city",
// 	age: 100,
// 	phoneNumber: "12345",
// 	email: "ars@domain.com",
// };

// const middleware = async (
// 	btn: HTMLButtonElement,
// 	loadingMsg: string,
// 	serviceCB: () => Promise<any>
// ) => {
// 	const defaultText = btn.innerText;
// 	btn.innerText = loadingMsg;
// 	btn.disabled = true;

// 	try {
// 		const data = await serviceCB();
// 		console.log(data);
// 	} catch (err: any) {
// 		console.log(err.message);
// 	}

// 	btn.innerText = defaultText;
// 	btn.disabled = false;
// };

// getUsersBtn.addEventListener("click", async () =>
// 	middleware(getUsersBtn, "Loading users...", userServices.users)
// );

// addUserBtn.addEventListener("click", async (e) => {
// 	middleware(e.target as HTMLButtonElement, "Adding user...", () => userServices.create(mockUser));
// });

// updateUserBtn.addEventListener("click", async (e) => {
// 	middleware(e.target as HTMLButtonElement, "Updating user...", () =>
// 		userServices.update("846f4aef-937d-4d42-9592-3644b9df3598", mockUser)
// 	);
// });

// function createFn() {
// 	const memory: Record<string, number> = {};

// 	return (name: string) => {
// 		const value = memory[name];
// 		memory[name] = value ? value + 1 : 1;

// 		console.log(`${name} = ${memory[name]}`);
// 	};
// }

// const fn = createFn();

// fn("arslonbek"); // arslonbek = 1 -> memory = { arslonbek: 1 }
// fn("arslonbek"); // arslonbek = 2 -> memory = { arslonbek: 2 }
// fn("boburbek"); // boburbek = 1 -> memory = { arslonbek: 2, boburbek: 1 }
// fn("boburbek"); // boburbek = 2 -> memory = { arslonbek: 2, boburbek: 2 }
// fn("boburbek"); // boburbek = 3 -> memory = { arslonbek: 2, boburbek: 3 }
// fn("jamshidbek"); //  jamshidbek = 1 -> -> memory = { arslonbek: 2, boburbek: 3, jamshidbek: 1 }

function createIncrement() {
	let counter = 0;

	counter++;
	
	function fn() {
		return counter;
	}

	return fn;
}

const increment = createIncrement();

increment(); // 1
increment(); // 1
increment(); // 1
