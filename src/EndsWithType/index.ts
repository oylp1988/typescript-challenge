type EndsWith<T extends string, M extends string> = T extends `${infer N}${M}`
  ? true
  : false;
type endsWitha = EndsWith<"abc", "bc">; // expected to be false
type endsWithb = EndsWith<"abc", "ab">; // expected to be true
type endsWithc = EndsWith<"abc", "abcd">; // expected to be false
