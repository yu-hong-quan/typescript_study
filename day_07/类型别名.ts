/**
 * 《类型别名》
 * 使用场景：当同一类型（复杂）被使用多次时，可以通过类型别名，简化该类型的使用。
 * 解释：
 *  1. 使用type关键字来创建别名
 *  2. 创建类型别名后，直接使用该类型别名作为变量的类型注解即可。
 */
type CustomArray = Array<number | string>;
// type CustomArray = (number | string)[];
let arr1: CustomArray = [ 1, 2, 3, '4', '5' ];
let arr2: CustomArray = [ 7, 8, 9, '10', '11' ];
