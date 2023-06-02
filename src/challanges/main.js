function find(str = "") {
	const memory = {};
	let max = 0;
	let char = 0;

	for (let i = 0; i < str.length; i++) {
		const item = str[i];
		const value = memory[item];
		memory[item] = value ? value + 1 : 1;

		if (max < memory[item]) {
			max = memory[item];
			char = item;
		}
	}

	console.log(`[MAX][${char}][${max}]`);
}

find("asdndjka nufon[njkdsnjka000--------!!!!193ndanskjnaddas");
// [MAX][char][20]
