type OmitByType<T, P> = {
  [key in keyof T as T[key] extends P ? never : key]: T[key];
};
type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }
