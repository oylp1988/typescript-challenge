const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

// 要点
// 注意这里的大括号是对象，但是因为T是数组，所以最后的解析也会自动转化成数组对象。 !!!数组即对象!!
declare function PromiseAll<T extends unknown[]>(
  value: readonly [...T]
): Promise<{
  [R in keyof T]: T[R] extends Promise<infer S> ? S : T[R];
}>;

// expected to be `Promise<[number, 42, string]>`
const promiseResult1 = Promise.all([promise1, promise2, promise3] as const);

const promiseResult2 = PromiseAll([promise1, promise2, promise3] as const);
