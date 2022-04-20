// 要点
// 以第三个参数作为存储变量递增flatten的次数, 递增的方法就是向第三个参数添加一个数组元素
type FlattenDepth<
  T extends any[],
  M extends number = 1,
  C extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? C["length"] extends M
      ? [First, ...FlattenDepth<Rest, M, C>]
      : [...FlattenDepth<First, M, [0, ...C]>, ...FlattenDepth<Rest, M, C>]
    : [First, ...FlattenDepth<Rest, M, C>]
  : T;
type aFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type bFlattenDepth = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
