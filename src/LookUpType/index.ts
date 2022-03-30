interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

// 要点
// 这里的泛型使用了条件类型的分布式特性,
// 相当于这个泛型所代表的联合类型被展开
type LookUp<T extends { type: string }, M extends T["type"]> = T extends {
  type: M;
}
  ? T
  : never;

type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
