/**
 * 《类型推论》
 * 解释：
 * 1. 在TS中，某些没有明确指出类型的地方，TS的类型推论机制会帮助提供类型
 * 使用场景：
 * 1. 声明变量并初始化时
 * 2. 决定函数返回值时
 */

// 声明变量并立即初始化值，此时，可以省略类型注解
let age = 16;

// 注意，如果声明变量但没有立即初始化值，此时，还必须手动添加类型注解
let a: number;
a = 19;

function add(num1: number, num2: number): number {
	return num1 + num2;
}

function addTwo(num1: number, num2: number) {
	return num1 + num2;
}
