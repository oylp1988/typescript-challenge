type DropChar<
  T extends string,
  P extends string
> = T extends `${infer First}${P}${infer Rest}`
  ? DropChar<`${First}${Rest}`, P>
  : T;
type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'
