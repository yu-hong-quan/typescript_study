/*
 * @Author: XiaoYu
 * @Date: 2022-07-26 10:27:59
 */
/**
 * 《泛型类》
 */

/** 第一种写法：手动指定类型 */
// 创建泛型类
class GenericNumber<NumTyper> {
  nameValue:string;
	defaultValue: NumTyper;
	add: (x: NumTyper, y: NumTyper) => NumTyper;
}

// 使用泛型类
const myNum = new GenericNumber<number>();
myNum.defaultValue = 10;
myNum.add(-5, 10);



/** 第二种写法：依靠类型检测机制自动匹配类型 */
// 创建泛型类
class GenericNumberTwo<NumTyper,K> {
	defaultValue: NumTyper;
  nameValue:K;
	add: (age: NumTyper, name: K) => NumTyper;

	constructor(age: NumTyper, name:K) {
		this.defaultValue = age; //18
    this.nameValue = name; //修改后的年龄
	}
}

// 使用泛型类
const myNumTwo = new GenericNumberTwo<number,string>(23,'修改前的年龄');
myNumTwo.defaultValue = 18;
myNumTwo.add(18, '修改后的年龄');
