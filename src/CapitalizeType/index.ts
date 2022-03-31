// 要点
// 此处似乎是从左向右开始Infer
type MyCapitalize<S extends string> = S extends `${infer F}${infer M}`
  ? `${Uppercase<F>}${M}`
  : S;

type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
