let person: {
	//TS对象类型中的属性是用(;)分号来分割的
	name: string;
	age: number;
	sayHi: (color: string) => void;
	greet(): number;
} = {
	name: 'xiaoyu',
	age: 19,
	sayHi: (color) => {
		console.log(color);
	},
	greet() {
		return 123;
	}
};

person.sayHi('颜色：白色');
