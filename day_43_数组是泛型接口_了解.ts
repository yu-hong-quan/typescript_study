/**
 * 《数组是泛型接口》
 */

const strs = [ 'a', 1, 'c' ];
strs.forEach((item) => {}); //Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

const nums = [ 1, 3, 5 ];
nums.forEach((item) => {}); //Array<number>.forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
