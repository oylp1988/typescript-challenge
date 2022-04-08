type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

// 要点
// Distributive Conditional Types。
// 默认就处于 Distributive Conditional Types 状态，U 将是联合类型中的一个子集，而不再是联合类型
type ReplaceKeys<
  U extends Record<keyof any, unknown>,
  T extends keyof any,
  Y extends Record<keyof any, unknown>
> = {
  [Key in keyof U]: Key extends T
    ? Key extends keyof Y
      ? Y[Key]
      : never
    : U[Key];
};

type ReplacedNodes = ReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
