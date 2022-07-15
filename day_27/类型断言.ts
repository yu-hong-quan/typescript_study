/**
 * 《类型断言》
 * 解释：
 * 1. 有时候你会比TS更加明确一个值的类型，此时，可以使用类型断言来指定更加具体的类型。
 * 使用：
 * 1. 使用as关键字来实现类型断言
 * 2. 关键字as后面的类型是一个更加具体的类型
 */

// 第一种写法
const aLink = document.getElementById('link') as HTMLAnchorElement;

// 第二种写法（不常用，了解便可）
const aLinkTwo = <HTMLAnchorElement>document.getElementById('link');
