// 要点
// 注意这里空对象的写法, 不能写{}. any extends {} 永远为true
type Falsy<T> = T extends 0 | "" | false | [] | { [key: string]: never }
  ? false
  : true;

// 要点
// 注意数组不是string,这里不要忘了解构赋值
type MyAnyOf<T extends any[]> = T extends [infer M, ...infer N]
  ? Falsy<M> extends true
    ? true
    : N extends any[]
    ? MyAnyOf<N>
    : false
  : false;
type AnyOfSample1 = MyAnyOf<[1, "", false, [], {}]>; // expected to be true.
type AnyOfSample2 = MyAnyOf<[0, "", false, [], {}]>; // expected to be false.

type AnyOftest = Falsy<1>;
