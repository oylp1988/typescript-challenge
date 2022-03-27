type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

// 要点
// T是扩展于数组的泛型, 因此具有length属性
type MyFirst<T extends any[]> = T["length"] extends 0 ? never : T[0];
type MyFirst1<T extends any[]> = T extends [] ? never : T[0];

type head1 = MyFirst<arr1>; // expected to be 'a'
type head2 = MyFirst<arr2>; // expected to be 3
