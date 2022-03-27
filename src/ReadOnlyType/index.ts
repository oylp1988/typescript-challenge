interface TodoReadOnlyType {
  title: string;
  description: string;
}
// 要点
// 此处需要注意和PickType中用法的区别
// 此处的T是一个对象类型，因此需要使用keyof转化为联合类型
// 而MyPick中的V所代表的泛型已经是一个联合类型了
type MyReadonly<T> = {
  readonly [p in keyof T]: T[p];
};

const todoReadOnlyType: MyReadonly<TodoReadOnlyType> = {
  title: "Hey",
  description: "foobar",
};

// todo.title = 'Hello'; // Error: cannot reassign a readonly property
// todo.description = 'barFoo'; // Error: cannot reassign a readonly property
