/**
 * 《接口继承》
 * 解释：如果两个接口之间有相同的属性或方法，可以将公共的属性或方法抽离出来，通过继承来实现复用。
 */

interface Point2D {
	x: number;
	y: number;
}
let prantObj: Point2D = {
	x: -100,
	y: 200
};

interface Point3D extends Point2D {
	z: number;
}
let childrenObj: Point3D = {
	x: -100,
	y: 200,
	z: 500
};

console.log(prantObj); //{ x: -100, y: 200 }
console.log(childrenObj); //{ x: -100, y: 200, z: 500 }
