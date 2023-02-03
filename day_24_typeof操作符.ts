/**
 * 《typeof操作符》
 * 众所周知，JS中提供了typeof操作符，用来在JS中获取数据的类型。
 * 解释：
 * 1. 使用typeof操作符来获取变量的类型，结果与对象字面量形式的类型相同。
 * 2. TS中typeof只能用来查询变量或属性的类型，无法查询其它形式的类型（比如，函数调用的类型）
  */

let p = { x: '1', y: 2 };
function formatPoint(point: typeof p) {}
formatPoint({ x: '10', y: 20 });

let num: typeof p.x;
function add(num1: number, num2: number) {
	return num1 + num2;
}
// let ret:typeof add(1,2)  报错，见解释2
