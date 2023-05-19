// const p1 = new Promise(() => {});
// console.log(p1);

// const p2 = new Promise((res) => res(20));
// console.log(p2);

// const p3 = Promise.resolve(20);
// p3.then((value) => console.log(value));
// console.log(p3);

// const p4 = Promise.reject("malumot topilmadi");
// p4.catch((err) => console.log(err));
// console.log(p4);

export interface IParams {
	size?: number;
	time: number;
}

function delayNumber({ time, size = 50 }: IParams) {
	return new Promise<number>((resolve, reject) => {
		setTimeout(() => {
			if (size === 3) reject(new Error("Some wrong size"));
			else resolve(size);
		}, time);
	});
}

function promiseRace() {
	const promises: Promise<number>[] = [];
	for (let i = 1; i <= 5; i++) {
		const promise = delayNumber({ time: 1000 * i, size: i });

		promises.push(promise);
	}

	Promise.race(promises).then((value) => {
		console.log("value = ", value);
	});
}

promiseRace();
