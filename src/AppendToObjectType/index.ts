// 要点
// key in keyof T | M 重新构建联合类型
type AppendToObjectTest = { id: "1" };
type AppendToObject<T, M extends string, N extends any> = {
  [key in keyof T | M]: key extends keyof T ? T[key] : N;
};
type AppendToObjectResult = AppendToObject<AppendToObjectTest, "value", 4>; // expected to be { id: '1', value: 4 }
