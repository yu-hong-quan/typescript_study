/**
 * 《class的实例方法》
 * 解释：
 * 1. 方法的类型注解（参数和返回值）与函数用法相同
 */

class Point {
	x = 10;
	y = 20;
	scale(x1: number, y1: number): number {
		this.x *= x1;
		this.y += y1;
		return this.x + this.y;
	}
}

const p = new Point();
p.scale(5, 2);
console.log(p.x, p.y); //50 22
