/**
 * 《class类的修饰符》
 * 1. public：公有的，修饰该属性或该方法是共有的，默认都是为public修饰符。
 * 2. protected：受保护的，仅对其声明锁在的类和子类中(非实例对象)可见。
 * 3. private：私有的，只在当前类中可见，对实例对象以及子类也是不可见的。
 * 4. readonly：只读，用来防止在构造函数之外对属性进行赋值，只能在constructor构造函数中进行赋值，并且只能修饰属性，不能修饰方法
 */

class Animal {
	constructor(age: number) {
		this.age = age;
	}
	public status: number = 0;
	public move() {
		console.log('Moving along!');
		this.mouser();
		console.log(this.__runtext__);
	}
	protected isShow: boolean = true;
	protected mouser() {
		console.log('Moving Mouser!');
	}
	private __runtext__: string = '天上人间';
	private __run__() {
		console.log('Moving Private!');
	}
	readonly age: number = 18; //readonly修饰的属性一定要手动设置类型注解，否则类型推论会将其类型设置为当前的属性值
}
class Don extends Animal {
	bark() {
		this.move();
		this.mouser();
		// this.__runtext__ 报错：属性“__run__”为私有属性，只能在类“Animal”中访问。
		// this.__run__() 报错：属性“__run__”为私有属性，只能在类“Animal”中访问。
		console.log(this.isShow);
	}
}
const a = new Don(20);
a.status;
a.bark();
a.move();
// a.isShow; 报错：属性“isShow”受保护，只能在类“Animal”及其子类中访问。
// a.mouser();  报错：属性“mouser”受保护，只能在类“Animal”及其子类中访问

// 在接口中使用readonly
interface IPerson {
	readonly name: string;
}

let obj: IPerson = {
	name: 'jack'
};
// obj.name = 'rose'; 报错：无法分配到 "name" ，因为它是只读属性。

// 在参数类型中使用
let objTwo: { readonly name: string } = {
	name: 'jack'
};
objTwo.name;
