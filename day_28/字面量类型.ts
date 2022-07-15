/**
 * 《字面量类型》
 * 使用模式：字面量类型配合联合类型一起使用
 * 使用场景：用来表示一组明确的可选值列表
 * 比如，在贪吃蛇游戏中，游戏的方向的可选择只能是 上、下、左、右中的任意一个，其它的不可。
 */

let str1 = 'Hello JS'; //该属性是一个变量，它的值可以是任意字符串，所以类型为:string

const str2 = 'Hello TS'; //该属性是一个常量，它的值不可变，所以类型为'Hello TS'(即值)，也叫字面量类型

let age: 18 = 18; //值可以作为类型出现，也叫字面量类型

function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {}
changeDirection('up');
// changeDirection('abc'); 报错： 类型“"abc"”的参数不能赋给类型“"up" | "down" | "left" | "right"”的参数。
