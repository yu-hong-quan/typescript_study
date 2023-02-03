/**
 * 《class的基本使用》
 * 解释：
 * 1. TS中的class，不仅提供了class的语法功能，也作为一种类型存在。
 */

class Person {
	age: number; //定义实例属性
	gender = '男'; //直接赋值，类型推论默认断定为字符串类型
}
const p = new Person();
p.age; //访问实例中的属性
p.gender;
