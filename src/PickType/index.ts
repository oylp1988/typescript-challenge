interface TodoPickType {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, V extends keyof T> = {
  [v in V]: T[v];
};

type TodoPick = MyPick<TodoPickType, "title" | "completed">;

const todoPick: TodoPick = {
  title: "Clean room",
  completed: false,
};
