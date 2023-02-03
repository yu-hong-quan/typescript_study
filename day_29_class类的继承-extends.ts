/**
 * 《class的继承》
 * 类继承的两种方式：1、extends（继承父类） 2、implements（实现接口）。
 * 说明：JS中只有textends，而implements是TS提供的。
 * 解释：
 * 1. 通过extends关键字实现继承。
 * 2. 子类继承父类，那子类就同时具有了父类和子类的所有属性和方法。
 */

// 父类
class Animal {
	name = '二哈';
	move() {
		console.log('Moving along!');
	}
}

// 子类
class Dog extends Animal {
	bark() {
		console.log('汪~ ' + this.name);
	}
}

const dog = new Dog();
dog.move();
dog.bark();
