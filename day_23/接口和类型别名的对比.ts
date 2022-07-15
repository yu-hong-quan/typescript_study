/**
 * 《interface(接口) 和 type(类型别名)》的对比
 * 相同点：都可以给对象指定类型
 * 不同点：
 *  1. 接口，只能为对象指定类型
 *  2. 类型别名，不仅可以为对象指定 类型，实际上可以为任意类型指定别名
 */

// 接口
interface Iperson {
	name: string;
	age: number;
	sayHi(): void;
}

// 类型别名
type Iperson2 = {
	name: string;
	age: number;
	sayHi(): void;
};

type NumStr = number | string;
