type AbsoluteTest = -100;
type Absolute<T extends number | bigint | string> = `${T}` extends `-${infer M}`
  ? `${M}`
  : `${T}`;
type AbsoluteResult = Absolute<AbsoluteTest>; // expected to be "100"
