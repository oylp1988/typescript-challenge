type Foo = {
  [key: string]: any;
  foo(): void;
};

type RemoveIndexSignature<T> = {
  [key in keyof T as string extends key
    ? never
    : number extends key
    ? never
    : key]: T[key];
};

type RemoveIndexSignatureResult = RemoveIndexSignature<Foo>; // expected { foo(): void }
