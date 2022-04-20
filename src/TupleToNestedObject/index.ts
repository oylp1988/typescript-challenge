// 要点
// as 断言设置First的类型为string
type TupleToNestedObject<T extends string[], M> = T extends [
  infer First,
  ...infer Rest
]
  ? {
      [key in First as First extends string
        ? First
        : never]: Rest extends string[] ? TupleToNestedObject<Rest, M> : never;
    }
  : M;
type aTupleToNested = TupleToNestedObject<["a"], string>; // {a: string}
type bTupleToNested = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type cTupleToNested = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type
