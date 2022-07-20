/**
 * 《类型兼容性》
 * 两种类型系统：1、结构化类型系统  2、标明类型系统
 * TS采用的是结构化类型系统，也叫做duck typing(鸭子类型)，类型检查关注的是值所具有的形状。
 * 也就是说，在结构类型系统中，如果两个对象具有相同的形状，则认为他们属于同一类型。
 */

class Point {
	x: number;
	y: number;
}

class Point2D {
	x: number;
	y: number;
}

const p: Point = new Point2D();
