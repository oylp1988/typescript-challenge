type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type Primitive = string | number | boolean;
// type MyDeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends Primitive | Function ? T[P] : MyDeepReadonly<T[P]>
// }

// 要点
// 使用Record类型进行判断，上面使用Primitive联合类型进行判断
// 这种写法其实也是对的,从下面的isEqual可以看出
type MyDeepReadonly<T extends Record<string, unknown>> = {
  readonly [key in keyof T]: T[key] extends Record<string, unknown>
    ? MyDeepReadonly<T[key]>
    : T[key];
};
// 要点
// 字面型类型的keyof T 是never类型, 以此作为递归的中止条件
// 这里readonly [P in keyof T]似乎可以拿到外面来，跟上面两种写法一样,因为:左边的内容其实不并递归
// type MyDeepReadonly<T> = keyof T extends never
//   ? T
//   : {
//       readonly [P in keyof T]: MyDeepReadonly<T[P]>;
//     };
type DeepReadonlyExpected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type TodoDeepReadOnly = MyDeepReadonly<X>; // should be same as `Expected`
type CompareReadOnlyResult = isEqual<TodoDeepReadOnly, DeepReadonlyExpected>;
