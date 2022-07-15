/**
 * 《函数类型》
 * 解释：函数的类型实际上指的是：函数参数和返回值的类型。
 */

//写法一：单独指定参数、返回值的类型
function add(num1: number, num2: number): number {
	//返回值类型是number类型
	return num1 + num2;
}
console.log(add(2, 3));

const add2 = (num3: string, num4: number): void => {
	//无返回值
	console.log(num3 + num4);
};
add2('day_0', 8);

//写法二：同时指定参数、返回值的类型   只适用于函数表达式
const add3: (num5: number, num6: string) => string = (num5, num6) => {
	return num5 + num6;
};

console.log(add3(8, '0_day'));
