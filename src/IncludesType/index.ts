type isEqual<M, N> = M extends N ? (N extends M ? true : false) : false;

// 要点
// infer的使用
type MyIncludes<M extends any[], N> = M extends [infer First, ...infer Rest]
  ? isEqual<First, N> extends true
    ? true
    : MyIncludes<Rest, N>
  : false;
type isPillarMen = MyIncludes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
