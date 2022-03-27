type MyConcat<M extends any[], N extends any[]> = [...M, ...N];
type ConcatResult = MyConcat<[1], [2]>; // expected to be [1, 2]
