/**
 * 《接口之间的类型兼容性》
 */

interface Point {
	x: number;
	y: number;
}
interface Point2D {
	x: number;
	y: number;
}

interface Point3D {
	x: number;
	y: number;
	z: number;
}

let p1: Point;
let p2: Point2D;
let p3: Point3D;

p1 = p2;

// 错误演示
// p3 = p2;  类型 "Point2D" 中缺少属性 "z"，但类型 "Point3D" 中需要该属性。

// 类和接口之间也是兼容的
class Point4D {
	x: number;
	y: number;
	z: number;
}
p2 = new Point4D();
