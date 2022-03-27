// 要点
// 这里的泛型使用了条件类型的分布式特性,
// 相当于这个泛型所代表的联合类型被展开
type MyExclude<T, U> = T extends U ? never : T;
