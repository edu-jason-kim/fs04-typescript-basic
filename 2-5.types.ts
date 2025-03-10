// 기본형
const itemName: string = '바람막이'
const itemPrice: number = 129000
const isSoldout: boolean = false
const isOwner: undefined = undefined
const seller: null = null

// 배열과 튜플
const cart: string[] = ['c001', 'c002']
const carts: string[][] = [
  cart,
  ['c001', 'c002'],
  ['d001', 'd002']
]

const mySizes: [number, number, string] = [
  105, 34, 'XL'
]

const mySize0 = mySizes[0] // number
const mySize1 = mySizes[1] // number
const mySize2 = mySizes[2] // string

mySizes[1] = '35' // Type 'string' is not assignable to type 'number'
mySizes[2] = 'XXL' // 아이템 재할당 가능, 기존 튜플 개념과 다른 부분

// 객체
const product: {
  id: string
  name: string
  price: number
  isMemberOnly?: boolean // optional
} = {
  id: 'c001',
  name: '바람막이',
  price: 129000,
  // isMemberOnly: false
}

// 같은 타입의 속성을 제한없이 할당하는 경우
const stock: {
  [productId: string]: number
} = {
  'c001': 4,
  'c002': 10
}


export {}