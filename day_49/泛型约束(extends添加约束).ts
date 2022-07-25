/**
 * 《泛型约束(extends添加约束)》
 */
interface ILength {
	length: number;
}

// 这里的extends 已不是继承的概念了，这里的extends的意思是 “约束泛型变量T 只能存在ILength这个接口下的变量类型范围”
function Fnc<T extends ILength>(value: T): T {
	return value;
}
Fnc([ 'a', 'c' ]);
Fnc([ '123' ]);
Fnc({ length: 10, name: 'jack' });

// 错误演示
// Fnc(123) 报错：类型“number”的参数不能赋给类型“ILength”的参数。
