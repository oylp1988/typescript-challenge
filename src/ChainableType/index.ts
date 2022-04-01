// 要点
// 这种写法似乎会推断出参数的泛型
// Key在这里就是一个类型, 而不是对象类型。所以这里不要用keyof
type Chainable<Result = {}> = {
  option<Key extends string, Value>(
    key: Key,
    value: Value
  ): Chainable<Result & { [P in Key]: Value }>;
  get: () => Result;
};
declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// 期望 result 的类型是：
interface ChainableResult {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

type isChainableResultEqual = isEqual<typeof result, ChainableResult>;
