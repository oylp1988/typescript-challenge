// 要点
// 注意这种递归的写法; 同时对First和Rest都要进行递归
type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : [];
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
