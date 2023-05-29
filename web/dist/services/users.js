var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const baseURL = "http://localhost:8000/api/users";
const TIME = 500;
const delay = (time) => new Promise((res) => setTimeout(() => res(20), time));
export const userServices = {
    users: () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(baseURL);
        yield delay(TIME);
        return res.json();
    }),
    create: (user) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(baseURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        yield delay(TIME);
        return res.json();
    }),
    update: (userID, newUser) => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(`${baseURL}/${userID}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });
        yield delay(TIME);
        return res.json();
    }),
};
