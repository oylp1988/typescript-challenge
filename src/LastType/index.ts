type LastArr1 = ["a", "b", "c"];
type LastArr2 = [3, 2, 1];

type Last<T extends any[]> = T extends [...infer First, infer Last]
  ? Last
  : never;

type tail1 = Last<LastArr1>; // expected to be 'c'
type tail2 = Last<LastArr2>; // expected to be 1
