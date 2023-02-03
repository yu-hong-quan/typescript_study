/**
 * 《索引查询类型》
 * 描述：T[P]语法，在TS中叫做索引查询(访问)类型。
 * 作用：用来查询属性的类型。
 */

type Props = { a: number; b: string; c: boolean };

type TypeA = Props['a']; //type TypeA = number

/**
 * 解释：
 * 1. Props['a']表示查询类型Props中属性'a'对应的类型number。所以，TypeA的类型为number。
 * 2. []中的属性必须存在于被查询类型中，否则就会报错。
 */

// 模拟 Partial 类型
type MyPartial<T> = { [P in keyof T]?: T[P] };

type PartialProps = MyPartial<Props>;
