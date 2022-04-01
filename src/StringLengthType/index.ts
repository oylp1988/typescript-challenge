// 要点
// 递归
// StringToArray的第二个默认参数的使用 -- 被用于临时存储结果
// infer
type StringToArray<
  S extends string,
  T extends string[] = []
> = S extends `${infer M}${infer N}` ? StringToArray<N, [...T, M]> : T;
type LengthOfString<S extends string> = StringToArray<S>["length"];

type A = LengthOfString<"aaaa">;
