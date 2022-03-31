// 要点
// 注意 ReplaceAll<`${First}${N}${Last}`, M, N> 这里不要误写成
// ReplaceAll<`${First}${N}${Last}` extends string, M extends string, N extends string>
type ReplaceAll<
  S extends string,
  M extends string,
  N extends string
> = S extends `${infer First}${M}${infer Last}`
  ? ReplaceAll<`${First}${N}${Last}`, M, N>
  : S;
type replacedAll = ReplaceAll<"t y p e s", " ", "">; // 期望是 'types'
