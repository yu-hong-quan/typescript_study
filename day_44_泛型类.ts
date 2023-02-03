/**
 * 《泛型类》
 */

/** 第一种写法：手动指定类型 */
// 创建泛型类
class GenericNumber<NumTyper> {
	defaultValue: NumTyper;
	add: (x: NumTyper, y: NumTyper) => NumTyper;
}

// 使用泛型类
const myNum = new GenericNumber<number>();
myNum.defaultValue = 10;
myNum.add(-5, 10);

/** 第二种写法：依靠类型检测机制自动匹配类型 */
// 创建泛型类
class GenericNumberTwo<NumTyper> {
	defaultValue: NumTyper;
	add: (x: NumTyper, y: NumTyper) => NumTyper;

	constructor(value: NumTyper) {
		this.defaultValue = value; //5
	}
}

// 使用泛型类
const myNumTwo = new GenericNumberTwo<number>(5);
myNumTwo.defaultValue = 10;
myNumTwo.add(-5, 10);
