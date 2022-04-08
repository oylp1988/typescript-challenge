// 要点
// 重要
type StartsWith<T extends string, M extends string> = T extends `${M}${infer N}`
  ? true
  : false;
type startsWitha = StartsWith<"abc", "ac">; // expected to be false
type startsWithb = StartsWith<"abc", "ab">; // expected to be true
type startsWithc = StartsWith<"abc", "abcd">; // expected to be false
