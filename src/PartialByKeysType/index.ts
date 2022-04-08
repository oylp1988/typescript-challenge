interface User {
  name: string;
  age: number;
  address: string;
}

// 要点
// 对象属性的变化

type PartialByKeys<K extends Record<string, any>, M = keyof K> = {
  [key in keyof K as key extends M ? key : never]?: K[key];
} & {
  [key in keyof K as key extends M ? never : key]: K[key];
};

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }
