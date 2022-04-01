// 要点
// 这里的第二个参数相当于一个临时变量用于存储;
// 排除联合类型--exclude;
// [T] extends [never] ? [] 这里返回的[]用于终止条件时...Permuatation的展开, 避免never影响结果([]才可以被正确的用于计算),
// 同时还使用到了分布类型
// 这个条件类型的合并是在 全部递归完才合并的。
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;

type Perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B']

// 要点
// 注意看这里的终止条件; 如果缺少 [T] extends [never]; 结果将永远为never;
// 所以第一个extends语句是必须的; 否则结果永远为never
// T extends never ? 这样写也不对, 当T为never时, 结果为never
type TPermutation<T, K = T> = [T] extends [never] ? true : false;

type tPerm = TPermutation<never>;

type TP<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...TP<Exclude<T, K>>]
  : never;

type RPerm = TP<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B']
