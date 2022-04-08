interface RequiredByKeysUser {
  name?: string;
  age?: number;
  address?: string;
}

type RequiredByKeys<T extends Record<string, any>, M = keyof T> = {
  [key in keyof T as key extends M ? key : never]-?: T[key];
} & {
  [key in keyof T as key extends M ? never : key]: T[key];
};
type RequiredByKeysResult = RequiredByKeys<RequiredByKeysUser, "name">; // { name: string; age?: number; address?: string }
