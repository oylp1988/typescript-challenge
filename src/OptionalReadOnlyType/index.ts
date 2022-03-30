interface TodoOptionalReadOnlyType {
  title: string;
  description: string;
  completed: boolean;
}

// 要点
// 这里必须在泛型中添加约束 keyof T, 保证第二个泛型参数为联合类型
type MyOptionalReadOnly<T, M extends keyof T> = Omit<T, M> &
  Readonly<Pick<T, M>>;

const todo: MyOptionalReadOnly<
  TodoOptionalReadOnlyType,
  "title" | "description"
> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK
