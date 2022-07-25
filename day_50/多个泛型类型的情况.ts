/**
 * 《多个泛型类型的情况》
 */

function getProp<T, K extends keyof T>(obj: T, key: K) {
	console.log(obj);
	console.log(obj[key]); //18
	return obj[key];
}
let person = { name: 'jack', age: 18 };
getProp(person, 'age');

// 了解便可
getProp(18, 'toFixed'); //这样可访问数字类型的内置方法
getProp('abc', 'split'); //这样可访问字符串类型的内置方法

/**
 * 解释：
 * 1. 添加了第二个类型变量 K ， 两个类型变量之间使用(,)逗号分隔。
 * 2. keyof关键字 接收一个对象类型，生成其键名称（可能是字符串或数字）的联合类型。
 * 3. 本示例中keyof T 实际上获取的是person对象所有键的联合类型，也就是：'name'|'age'。
 * 4. 类型变量K 受 T 约束，可以了解为：K只能是T所有键中的任意一个，或者说只能访问对象中存在的属性。
 */
