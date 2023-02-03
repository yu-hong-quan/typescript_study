/**
 * 《泛型工具类型》
 * 描述：TS内置了一些常用的工具类型，来简化TS中的一些常见操作。
 * 说明：它们都是基于泛型类型的(泛型适用于多种类型，更加通用)，并且内置的，可以直接在代码中使用。
 * 主要学习的工具类型：
 * 1. Partial<Type>
 * 2. Readonly<Type>
 * 3. Pick<Type,Keys>
 * 4. Record<Keys,Type>
 */

/** ------------------------------------------------------------------------------------------------------- **/

/** 工具类型(1)：“ Partial ”
 *  解释：Partial<Type>用来构造一个类型，将Type的所有属性设置为可选的
 */
interface Props {
	id: string;
	children: number[];
}

//通过type类型别名定义一个新的类型，这个类型是接口Props里属性的类型并且是可选的
type PartialProps = Partial<Props>;

// 默认的写法
let p1: Props = {
	id: '',
	children: [ 1 ]
};

// 使用工具类型Partial后生成的新的类型的写法
let p2: PartialProps = {
	// 可一个属性都不加，因为现在是可选的了
};
let p3: PartialProps = {
	//也可少属性
	id: 'jock'
};

/** ------------------------------------------------------------------------------------------------------- **/

/** 工具类型(2)：“ Readonly ”
 *  解释：Readonly<Type>用来构造一个类型，将Type的所有属性设置为readonly(只读)
 */
interface PropsTwo {
	name: string;
	ids: number[];
}

//通过type类型别名定义一个新的类型，这个类型是接口Props里属性的类型并且是只读的不可重新赋值
type ReadonlyProps = Readonly<PropsTwo>;

let p4: ReadonlyProps = {
	name: 'jock',
	ids: [ 1, 2, 3 ]
};

p4.name; //可读取
// p4.name = 'xiaoyi'; // 报错，不可修改 因为它是只读属性

/** ------------------------------------------------------------------------------------------------------- **/

/** 工具类型(3)：“ Pick ”
 *  描述：Pick<Type,Keys>从Type中选择一组属性来构造新类型
 *  解释：
 *  1. Pick工具类型有两个类型变量：1表示选择谁的属性  2表示选择哪几个属性
 *  2. 其中第二个类型变量，如果只选择一个则之传入该属性名即可。
 *  3. 第二个类型变量传入的属性只能是第一个类型变量中存在的属性。
 *  4. 下方实例中，构造出来的新类型PickProps，只有id和title两个属性类型。
 */
interface PropsThree {
	id: string;
	title: string;
	children: string[];
}

type PickProps = Pick<PropsThree, 'id' | 'title'>; //选择PropsThree中的属性且选择'id' | 'title' 这两个属性

let p5: PickProps = {
	id: 'xiaoyu',
	title: '前端'
	// children:['123']  //报错  “children”不在类型“PickProps”中
};

/** ------------------------------------------------------------------------------------------------------- **/

/** 工具类型(4)：“ Record ”
 *  描述：Record<Keys,Type>构造有个对象类型，属性键为Keys，属性类型为Type
 *  解释：
 *  1. Record工具类型有两个类型变量：1表示对象有哪些属性  2表示对象属性得类型
 *  2. 下方实例中，构建得新对象类型RecordObj表示：这个对象有三个属性分别为id/title/ids，属性值得类型都是string。
 */

type RecordObj = Record<'id' | 'title' | 'ids', string>;

let p6: RecordObj = {
	id: 'xiaoyu',
	title: '前端',
	ids: '1,2,3,4'
};

/** ------------------------------------------------------------------------------------------------------- **/
