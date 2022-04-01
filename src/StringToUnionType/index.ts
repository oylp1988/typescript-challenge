import { type } from "os";

type StringToUnionTest = "123";
type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never;
type StringToUnionResult = StringToUnion<StringToUnionTest>; // expected to be "1" | "2" | "3"
