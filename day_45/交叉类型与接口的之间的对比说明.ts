/**
 * 《交叉类型与接口的之间的对比说明》
 * 相同点：都可以实现对象类型的组合
 * 不同点：两种方式实现类型组合时，对于同名属性之间，处理类型冲突的方式不同。
 */

interface A {
    fn: (value: number) => string
}
//  错误演示
//  interface B extends A{   
//      fn:(value:string) => string
//  }
// 接口“B”错误扩展接口“A”。
//   属性“fn”的类型不兼容。
//     不能将类型“(value: string) => string”分配给类型“(value: number) => string”。
//       参数“value”和“value” 的类型不兼容。
//         不能将类型“number”分配给类型“string”。



interface A {
    fn: (value: number) => string
}

interface B {
    fn: (value: string) => string
}

type C = A & B

let c:C={
    fn(value:number|string){
        return ''
    }
}
// 或
let c_two:C;
c_two.fn(1123)
c_two.fn('asdasda')