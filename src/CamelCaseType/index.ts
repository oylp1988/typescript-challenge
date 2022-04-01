type CamelCaseTest = "for-bar-baz";

type MyCamelCase<T extends string> = T extends `${infer First}-${infer Rest}`
  ? `${MyCapitalize<First>}${MyCamelCase<Rest>}`
  : `${MyCapitalize<T>}`;

type CamelCaseResult = MyCamelCase<CamelCaseTest>;
