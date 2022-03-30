type popArr1 = ["a", "b", "c", "d"];
type popArr2 = [3, 2, 1];

type Pop<T extends any[]> = T extends [...infer First, infer Last]
  ? First
  : never;

type popResult1 = Pop<popArr1>; // expected to be ['a', 'b', 'c']
type popResult2 = Pop<popArr2>; // expected to be [3, 2]
