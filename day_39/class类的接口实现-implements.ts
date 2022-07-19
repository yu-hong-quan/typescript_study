/**
 * 《class的继承》
 * 类继承的两种方式：1、extends（继承父类） 2、implements（实现接口）。
 * 说明：JS中只有textends，而implements是TS提供的。
 * 解释：
 * 1. 通过implements关键字让class实现接口。
 * 2. 如A类实现了接口意味着，A类中必须提供接口中指定的所有方法和属性
 */

interface Singale {
	sing(): void;
	name: string;
}

class Person implements Singale {
	name = '小余';
	//必须提供接口中指定的所有方法和属性，否则会报错
	sing(): void {
		console.log('你是我的小丫小苹果');
	}
}
