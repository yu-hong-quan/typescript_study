/**
 * 《函数可选参数》
 * 解释：可传可不传的参数名称后面添加?（问好）标识。
 * 注意：可选参数只能出现在参数项中的末尾,否则会报错：[必选参数不能位于可选参数后]。
 * 小知识：可选参数如果未传值，默认为undeinfed
 */

function mySlice(start: number, end?: number): void {
	console.log('起始索引：', start, ' 结束索引：', end);
}
mySlice(0);
mySlice(1);
mySlice(1, 3);
