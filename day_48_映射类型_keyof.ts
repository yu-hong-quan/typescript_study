/**
 * 《映射类型(keyof)》
 * 描述：映射类型除了根据联合类型('name'|'title')创建新类型外，还可以根据对象类型来创建
 */

type Props = { a: number; b: string; c: boolean };
type Type3 = { [Key in keyof Props]: number };
/*
 * 解释：
 * 1. 首先，先执行keyof Props获取到对象类型Props中的所有键的联合类型即，'a'|'b'|'c'。
 * 2. 然后，Key in... 就表示Key可以是Props中所有的键名称中的任意一个。
 * */

/** ----------------------------------------------------------------------------------------------- **/

// 分析泛型工具类型Partial的实现
type PartialC<T> = { [Key in keyof T]?: T[Key] };
type PropsC = { age: number; name: string; isOk: boolean };
type PartialProps = PartialC<PropsC>;
// 使用
let newobj: PartialProps = {
	age: 10,
	name: 'xiaoyu',
	isOk: true
};
/*
 * 解释：
 * 1. keyof T 即keyof Props表示获取Props的所有键，也就是：'age'|'name'|'isOk'。
 * 2. 在[]后面添加?(问号)，表示将这些属性变为可选的，以此来实现Partial的功能。
 * 3. 冒号后面的T[Key]表示获取T中每个键对应的类型。比如，如果是'age'则类型是numbe；如果是'name'则类型是string。
 * 4. 最终，新类型PartialProps和旧类型Props结构完全相同，只是让所有类型都变为可选了。
 * */
