/**
 * 《泛型的基本使用》
 * 描述：泛型是可以在保证类型的安全前提下，让函数等与多种类型一起工作，从而实现复用，常用于：函数、接口、class中。
 * 解释：
 * 1. 泛型在保证类型安全（不丢失类型信息）的同时，可以让函数等与多种类型一起工作，灵活可复用。
 * 2. 泛型的名字可以是任意合法的变量名称
 */

// 创建泛型函数
function Fnc<T>(value: T): T {
	return value;
}
/**
  解释：
  1. 语法：在函数名称的后面添加<>（尖括号），尖括号中添加类型变量，比如此处的Type。
  2. 类型变量Type，是一种特殊类型的变量，它处理类型而不是值。
  3. 该类型变量相当于一个类型容器，能够捕获用户提供的类型（具体是什么类型由用户调用该函数时指定）。
  4. 因为Type是类型，因此可以将其作为函数参数和返回值的类型，表示参数和返回值具有相同的类型。
  5. 类型变量T，可以是任意合法的变量名称。
 */

// 使用泛型函数
const num = Fnc<string>('10'); //如果传入类型string，函数Fnc参数和返回值的类型就都是string。
const num2 = Fnc<number>(10); //如果传入类型number，函数Fnc参数和返回值的类型就都是number。
