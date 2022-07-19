/**
 *《class的构造函数》
 * 解释：
 * 1. 成员初始化（比如，age:number）后，才可以通过this.age来访问实例成员。
 * 2. 需要为构造函数指定类型注解，否则会被隐式推断为any; 构造函数不需要返回值类型。
*/
type CustomArray = number | string; //复习类型别名，并结合使用

class Person {
	age: CustomArray;
	gender: CustomArray;
	constructor(age: CustomArray, gender: CustomArray) {
		// 这里的this指向的是class这个实例对象
		this.age = age;
		this.gender = gender;
	}
}

const data = new Person(18, '年龄');
console.log(data.age, data.gender);
