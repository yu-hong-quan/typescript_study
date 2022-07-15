/**
 * 《接口》
 * 描述：当一个对象类型被多次使用的时，一般会使用接口（interface）来描述对象的类型，达到复用的目的。
 * 解释：
 * 1. 使用interface关键字来声明接口
 * 2. 接口名称可以是任意合法的变量名称
 * 3. 声明接口后，直接使用接口名称作为对象的类型
 * 4. 因为每一行只有一个属性类型，因此，属性类型后面摸鱼;（分号）
 */

// 默认写法
let person: {
	//TS对象类型中的属性是用(;)分号来分割的
	name: string;
	age: number;
	sayHi(): void;
} = {
	name: 'xiaoyu',
	age: 19,
	sayHi: () => {}
};

// 配合使用接口的写法
interface IPerson {
	name: string;
	age: number;
	sayHi(): void;
}
let person2: IPerson = {
	name: 'jack',
	age: 33,
	sayHi: () => {}
};
