type Unshift<M extends any[], N> = MyIncludes<M, N> extends true
  ? M
  : [N, ...M];
type UnshiftResult = Unshift<[1, 2], 0>; // [0, 1, 2,]
