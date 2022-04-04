// 要点
// never extends never 为false
type IsNever<T> = [T] extends [never] ? true : false;
type AIsNever = IsNever<never>; // expected to be true
type BIsNever = IsNever<undefined>; // expected to be false
type CIsNever = IsNever<null>; // expected to be false
type DIsNever = IsNever<[]>; // expected to be false
type EIsNever = IsNever<number>; // expected to be false
