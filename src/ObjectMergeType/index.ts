import { type } from "os";

type MergeObjectA = {
  a: 1;
  c: 4;
};
type MergeObjectB = {
  a: 2;
  b: 3;
};
type MyMerge<
  T extends Record<string, unknown>,
  P extends Record<string, unknown>
> = {
  [key in keyof T | keyof P]: key extends keyof P
    ? P[key]
    : key extends keyof T
    ? T[key]
    : never;
};

type ResultMerge = MyMerge<MergeObjectA, MergeObjectB>;
