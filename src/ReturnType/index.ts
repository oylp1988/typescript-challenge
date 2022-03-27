const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
type MyReturn<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer M
  ? M
  : never;
type a = MyReturn<typeof fn>; // 应推导出 "1 | 2"
