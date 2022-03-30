type Arr = ["1", "2", "3"];

// type MyTupleToUnion<T extends Primitive[]> = keyof MyTupleToObject<T>;

// 要点
// T[number]返回的是数组中所有类型的联合类型
type MyTupleToUnion<T extends Primitive[]> = T[number];

type Test = MyTupleToUnion<Arr>; // expected to be '1' | '2' | '3'
