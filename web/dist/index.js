var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userServices } from "./services/users";
const getUsersBtn = document.querySelector("#get_users_btn");
const updateUserBtn = document.querySelector("#update_user_btn");
const addUserBtn = document.querySelector("#add_user_btn");
const mockUser = {
    username: "Arslonbek",
    avatarURL: "https://avatars.googleusercontent.com",
    address: "Tashkent city",
    age: 100,
    phoneNumber: "12345",
    email: "ars@domain.com",
};
const middleware = (btn, loadingMsg, serviceCB) => __awaiter(void 0, void 0, void 0, function* () {
    const defaultText = btn.innerText;
    btn.innerText = loadingMsg;
    btn.disabled = true;
    try {
        const data = yield serviceCB();
        console.log(data);
    }
    catch (err) {
        console.log(err.message);
    }
    btn.innerText = defaultText;
    btn.disabled = false;
});
getUsersBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () { return middleware(getUsersBtn, "Loading users...", userServices.users); }));
addUserBtn.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    middleware(e.target, "Adding user...", () => userServices.create(mockUser));
}));
updateUserBtn.addEventListener("click", (e) => __awaiter(void 0, void 0, void 0, function* () {
    middleware(e.target, "Updating user...", () => userServices.update("846f4aef-937d-4d42-9592-3644b9df3598", mockUser));
}));
