"use strict";
function delay(time) {
    return new Promise((res) => {
        setTimeout(() => res(20), time);
    });
}
const endPoint = "https://jsonplaceholder.typicode.com/users";
window.addEventListener("load", async () => {
    await delay(5000); // fake delay
    const res = await fetch(endPoint);
    const users = (await res.json());
    renderUsers(users);
});
function renderUsers(users) {
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
