/**
 * 《映射类型》
 * 描述：基于旧类创建新类型（对象类型），减少重复、提升开发效率。
 * 解释：
 * 1. 映射类型是基于索引签名类型的，所以，该语法类似与索引签名类型，也使用了[]。
 * 2. Key in PropKeys表示Key可以是PropKeys联合类型中的任意一个，类似于forin(let k in obj)。
 * 3. 使用映射类型创建的新对象类型Type2 和 类型Tyoe1结构完全相同。
 * 4. 注意：映射类型只能在类型别名中使用，不能再接口中使用。
 */

// 默认写法
type PropKeys = 'x' | 'y' | 'z';
type Type1 = { x: number; y: number; z: number };

// 使用映射类型来简化
type PropKeys2 = 'x' | 'y' | 'z';
type Type2 = { [Key in PropKeys2]: number }; //将PropKeys2的可选值映射为对象的键Key，并一并设置为number类型
// 错误演示：映射类型只能在类型别名中使用，不能再接口中使用
// interface Type3 {
//   [Key in PropKeys2]:number
// }
