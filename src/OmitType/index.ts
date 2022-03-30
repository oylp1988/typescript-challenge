interface TodoOmitType {
  title: string;
  description: string;
  completed: boolean;
}

// 要点
// 注意 Omit和Exclude的区别; 此处使用keyof T先拿到T的联合类型
// 联合类型使用in; 普通的泛型对象类型使用in keyof
type MyOmit<T, M extends keyof T> = {
  [key in Exclude<keyof T, M>]: T[key];
};

type TodoOmit = MyOmit<TodoOmitType, "description" | "title">;

const todoOmit: TodoOmit = {
  completed: false,
};
