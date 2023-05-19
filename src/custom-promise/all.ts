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

function promiseAll() {
	const promises: Promise<number>[] = [];
	for (let i = 1; i <= 5; i++) {
		const promise = delayNumber({ time: 1000 * i, size: i });

		promises.push(promise);
	}

	Promise.all(promises).then((values) => {
		console.log("values = ", values);
	});
}

function promiseSimple1() {
	const resolve = (value: number) => console.log("value = ", value);

	delayNumber({ time: 1000, size: 1 }).then(resolve);
	delayNumber({ time: 2000, size: 2 }).then(resolve);
	delayNumber({ time: 3000, size: 3 })
		.then(resolve)
		.catch((err: Error) => {
			console.log(`[ERROR][❌] ${err.message}`);
		});
	delayNumber({ time: 4000, size: 4 }).then(resolve);
	delayNumber({ time: 5000, size: 5 }).then(resolve);
}



function promiseSimple2() {
	delayNumber({ time: 1000, size: 1 })
		.then((value) => {
			console.log("value = ", value);
			return delayNumber({ time: 1000, size: 2 });
		})
		.then((value) => {
			console.log("value = ", value);
			return delayNumber({ time: 1000, size: 3 });
		})
		.catch((err: Error) => {
			console.log(`[ERROR][❌] ${err.message}`);
		})
		.then((value) => {
			console.log("value = ", value);
			return delayNumber({ time: 1000, size: 4 });
		});
}

promiseSimple2();
