/**
 * 《泛型接口》
 * 描述：接口也可以配合泛型来使用，以增加其灵活性，增强其复用性。
 */

// 创建泛型接口
interface IdFunc<Type> {
	id: (value: Type) => Type; //返回值为泛型类型变量
	ids: () => Type[]; //返回值为泛型类型数组
}

// 使用泛型接口
let obj: IdFunc<number> = {
	//使用泛型接口时，必须指定泛型类型，因为接口无类型推断，所以需手动指定类型
	id(value) {
		return value;
	},
	ids() {
		return [ 1, 2, 3, 4 ];
	}
};
