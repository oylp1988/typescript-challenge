type TrimRight<S extends string> = S extends `${" " | "\n" | "\t"}${infer Rest}`
  ? TrimLeft<Rest>
  : S;
