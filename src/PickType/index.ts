interface TodoPickType {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, V extends keyof T> = {
  [v in V]: T[v];
};

type TodoPreview = MyPick<TodoPickType, "title" | "completed">;

const todoPickType: TodoPreview = {
  title: "Clean room",
  completed: false,
};
