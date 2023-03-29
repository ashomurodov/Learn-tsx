export function getList(items = [], size = 0) {
	const result = [];

	for (let i = 0; i < size; i++) {
		const randomIdx = Math.floor(Math.random() * items.length);
		const item = items[randomIdx];
		const isExist = result.includes(item);
		if (isExist) i--;
		else result.push(item);
	}

	return result;
}

export function createList(size) {
	const result = [];
	for (let i = 1; i <= size; i++) {
		result[i - 1] = i;
	}
	return result;
}
