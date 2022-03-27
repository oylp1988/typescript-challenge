type MyPush<M extends any[], N> = MyIncludes<M, N> extends true ? M : [...M, N];
type PushResult = MyPush<[1, 2], "3">; // [1, 2, '3']
