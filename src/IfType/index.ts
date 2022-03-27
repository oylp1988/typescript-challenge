type MyIf<P extends boolean, T, M> = P extends true ? T : M;
type IfA = MyIf<true, "a", "b">; // expected to be 'a'
type IfB = MyIf<false, "a", "b">; // expected to be 'b'
