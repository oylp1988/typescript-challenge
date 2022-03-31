// 要点
// 正则加递归
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"} ${infer Rest}`
  ? TrimLeft<Rest>
  : S;
