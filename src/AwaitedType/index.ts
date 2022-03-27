// 要点
// 这里使用了递归和类型推断
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
