import axios from "axios"

// 조건문 ? 참인 경우 expression : 거짓인 경우 expression
type IsNumber<T> = T extends number ? string : boolean

// T에 123이 들어감으로 인해서 IsNumber는 string 타입으로 잡힘
const a: IsNumber<123> = 'sadfas' // => const a: string = 'sadfas'


// T는 배열
// T extends [] => "T가 배열이라면?"
// infer는 해당 자리의 타입을 추론하기 위한 키워드
// 따라서 (infer U)[] 의 U 는 T의 아이템 타입이 됨
type ArrayElementType<T> = T extends (infer U)[] ? U : null

type Item1 = ArrayElementType<string[]>
type Item2 = ArrayElementType<string> // null


// 예시 2
type UnwrapPromise<T> = T extends Promise<infer U> ? U : null

type Result1 = UnwrapPromise<Promise<string>> // string
type Result2 = UnwrapPromise<string>          // null
