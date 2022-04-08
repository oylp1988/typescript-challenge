interface MutableTodo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type Mutable<T> = {
  -readonly [key in keyof T]: T[key];
};

type MutableTodoResult = Mutable<MutableTodo>; // { title: string; description: string; completed: boolean; }
