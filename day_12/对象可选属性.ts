/**
 * 《对象可选属性》
 * 1. 对象的属性或方法，也可以是可选的，此时就用到可选属性了。
 */

function myAxios(config: { url: string; method?: object }) {
	console.log(config);
}
myAxios({ url: '/api/login' });
