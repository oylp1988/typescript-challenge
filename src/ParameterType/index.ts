// 要点
// 注意这里的结构
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

declare function f1(arg: { a: number; b: string }): void;

type ParameterResult = MyParameters<typeof f1>;
