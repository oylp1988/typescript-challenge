type MyKebabCaseRaw<T extends string> = T extends `${infer First}${infer Rest}`
  ? First extends Uppercase<First>
    ? `-${Lowercase<First>}${MyKebabCaseRaw<Rest>}`
    : `${First}${MyKebabCaseRaw<Rest>}`
  : T;
type ExcludeFirstSymbol<T> = T extends `-${infer RestExclude}`
  ? `${RestExclude}`
  : T;
type MyKebabCase<T extends string> = ExcludeFirstSymbol<MyKebabCaseRaw<T>>;
type KebabResult = MyKebabCase<`FooBarBaz`>;

// 要点
// 注意这种在递归中如何传递一个参数的写法。用于储存变量
type KebabCase<
  S,
  isFirst extends boolean = true
> = S extends `${infer First}${infer Rest}`
  ? isFirst extends true
    ? `${Lowercase<First>}${KebabCase<Rest, false>}`
    : First extends Lowercase<First>
    ? `${First}${KebabCase<Rest, false>}`
    : `-${Lowercase<First>}${KebabCase<Rest, false>}`
  : S;
