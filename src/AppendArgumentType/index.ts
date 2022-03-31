type Fn = (a: number, b: string) => number;

type MyAppendArgument<M extends (...args: any) => any, N> = M extends (
  ...args: infer P
) => infer T
  ? (x: N, ...args: P) => T
  : M;

type Result = MyAppendArgument<Fn, boolean>;
// 期望是 (a: number, b: string, x: boolean) => number

// another approach
// lets say we have some function type
type SomeF = (a: number, b: string) => number;
// and we have our utility type
type AppendArgument<F extends (...args: any[]) => any, A> = (
  x: A,
  ...args: Parameters<F>
) => ReturnType<F>;

type FinalF = AppendArgument<SomeF, boolean>;
// FinalF should be (x: boolean, a: number, b: string) => number
