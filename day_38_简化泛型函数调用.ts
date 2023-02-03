/**
 * 《简化泛型函数调用》
 */

// 创建泛型函数
function Fnc<T>(value: T): T {
	return value;
}

// 使用泛型函数
// const num3 = Fnc<string>('10'); //简化前的写法
const num3 = Fnc('10'); //简化后的写法，无需再次声明类型，依靠类型参数推断机制，自动判断当前值是什么类型
