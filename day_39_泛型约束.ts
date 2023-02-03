/**
 * 《泛型约束》
 * 解释：默认情况下，泛型函数的类型变量T 可以代表多个类型，这导致无法访问任何属性。
 */

// 约束前
function Fnc<T>(value: T): T {
	// console.log(value.length);//类型“T”上不存在属性“length”
	// T 可以代表任意类型,无法保证一定存在length属性,比如number类型就没有length。
	// 此时，就需要为泛型添加约束来收缩类型
	return value;
}

// 约束后
function Fnc2<T>(value: T[]): T[] {
	console.log(value.length);
	// T 可以代表任意类型,无法保证一定存在length属性,比如number类型就没有length。
	// 此时，就需要为泛型添加约束来收缩类型
	return value;
}
