type FlipArguments<T> = T extends (...args: infer M) => infer ReturnType
  ? (...args: Reverse<M>) => ReturnType
  : never;
type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;

// (arg0: boolean, arg1: number, arg2: string) => void
