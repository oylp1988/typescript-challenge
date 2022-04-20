interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

// 要点
// [keyof T] 中的数组索引是一个联合类型，所以先distribute 然后再合起来.
// distribute之后作为索引找到对应的value, 再联合
// type ObjectEntries<T extends Record<string, any>> = {
//   [K in keyof T]: [K, T[K]];
// }[keyof T];

// 要点
// 注意第一个U是联合类型，使用了分布式特性, 先把联合类型分开操作
type ObjectEntries<T extends object, U = keyof T> = U extends U
  ? [U] extends [keyof T]
    ? [U, T[U]]
    : never
  : never;
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];
