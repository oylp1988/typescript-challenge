type DiffKey<K, M> = Exclude<K | M, K> | Exclude<K | M, M>;
type Diff<T, P> = {
  [key in DiffKey<keyof T, keyof P>]: key extends keyof T
    ? T[key]
    : key extends keyof P
    ? P[key]
    : never;
};

type AResult = {
  a: 1;
  b: 2;
};

type BResult = {
  c: 3;
  b: 3;
};

// type Diff<O, O1> = {
//   [key in
//     | Exclude<keyof O, keyof O1>
//     | Exclude<keyof O1, keyof O>]: key extends keyof O
//     ? O[key]
//     : key extends keyof O1
//     ? O1[key]
//     : never;
// };

type CResult = Diff<AResult, BResult>;
