/**
 * 《void类型》
 * 解释：函数无返回值的时候则需要通过void来声明
 */

function greet(name: string): void {
	console.log('Hello' + name);
}
greet('Jack');
