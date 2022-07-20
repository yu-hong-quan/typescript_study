/**
 * 《对象之间的类型兼容性》
 * 对于对象类型来说，b的成员至少与a相同，则a兼容b（成员多的可以赋值给少的）
 */

class Point {
	x: number;
	y: number;
}

class Point3D {
	x: number;
	y: number;
	z: number;
}

// 正确演示
const p: Point = new Point3D(); //成员多的可以赋值给成员少的

// 错误演示
// const p1: Point3D = new Point();   类型 "Point" 中缺少属性 "z"，但类型 "Point3D" 中需要该属性。
