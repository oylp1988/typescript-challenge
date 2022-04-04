// 要点
// 分发 分发 分发!!!!!
// 先分发联合类型, 再判断S是否是一个联合类型
// 默认参数
type IsUnion<T, S = T> = T extends S ? ([S] extends [T] ? false : true) : false;
type IsUnioncase1 = IsUnion<string>; // false
type IsUnioncase2 = IsUnion<string | number>; // true
type IsUnioncase3 = IsUnion<[string | number]>; // false
