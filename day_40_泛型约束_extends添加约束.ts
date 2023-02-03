/**
 * 《泛型约束(extends添加约束)》
 */
interface ILength {
	length: number;
	name: string;
	push: (bln: number) => boolean;
	shift: Function
}

// 这里的extends 已不是继承的概念了，这里的extends的意思是 “约束泛型变量T 需要满足ILength这个接口里面的属性”
function Fnc<T extends ILength>(value: T): T {
	console.log(value);
	return value;
}
// Fnc([1, 'c']);
// Fnc(['123']);
Fnc({ length: 10, name: 'jack', push: (bln: number) => { return true },shift(){} });

// 错误演示
// Fnc(123) 报错：类型“number”的参数不能赋给类型“ILength”的参数。
