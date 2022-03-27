const tuple = ["model 3", "model X", "model Y", "model F"] as const;

// 要点
// T[number]返回的是数组中所有类型的联合类型
type MyTupleToObject<T extends readonly any[]> = {
  [key in T[number]]: key;
};

type TupleToObjecResult = MyTupleToObject<typeof tuple>;
