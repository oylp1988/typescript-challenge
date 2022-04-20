type Reverse<T extends any[]> = T extends [...infer First, infer Last]
  ? [Last, ...Reverse<First>]
  : [];
type aResult = Reverse<["a", "b"]>; // ['b', 'a']
type bResult = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']
