import { userServices } from "./services/users";

const getUsersBtn = document.querySelector<HTMLButtonElement>("#get_users_btn")!;
const updateUserBtn = document.querySelector<HTMLButtonElement>("#update_user_btn")!;
const addUserBtn = document.querySelector<HTMLButtonElement>("#add_user_btn")!;

const mockUser = {
	username: "Arslonbek",
	avatarURL: "https://avatars.googleusercontent.com",
	address: "Tashkent city",
	age: 100,
	phoneNumber: "12345",
	email: "ars@domain.com",
};

const middleware = async (
	btn: HTMLButtonElement,
	loadingMsg: string,
	serviceCB: () => Promise<any>
) => {
	const defaultText = btn.innerText;
	btn.innerText = loadingMsg;
	btn.disabled = true;

	try {
		const data = await serviceCB();
		console.log(data);
	} catch (err: any) {
		console.log(err.message);
	}

	btn.innerText = defaultText;
	btn.disabled = false;
};

getUsersBtn.addEventListener("click", async () =>
	middleware(getUsersBtn, "Loading users...", userServices.users)
);

addUserBtn.addEventListener("click", async (e) => {
	middleware(e.target as HTMLButtonElement, "Adding user...", () => userServices.create(mockUser));
});

updateUserBtn.addEventListener("click", async (e) => {
	middleware(e.target as HTMLButtonElement, "Updating user...", () =>
		userServices.update("846f4aef-937d-4d42-9592-3644b9df3598", mockUser)
	);
});
