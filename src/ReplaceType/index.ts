// 要点
// 注意这里的M不需要推断
type MyReplace<
  S extends string,
  M extends string,
  N extends string
> = S extends `${infer First}${M}${infer Rest}` ? `${First}${N}${Rest}` : S;
type replaced = MyReplace<"types are fun!", "fun", "awesome">; // 期望是 'types are awesome!'
