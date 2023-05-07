export interface IBaseService<T> {
	create(data: T): number;
	getById(id: number): T;
	updateById(update: T): T;
	deleteById(id: number): number;
}
