enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

// 객체의 타입을 지정
interface Product {
  id: string
  name: string
  price: number
  isMemberOnly?: boolean
}

interface ClothingProduct extends Product {
  size: Size
}

const product1: ClothingProduct = {
  id: 'c001',
  name: '바람막이1',
  price: 129000,
  size: Size.L
}

const product2: ClothingProduct = {
  id: 'c002',
  name: '바람막이2',
  price: 139000,
  size: Size.XS,
  isMemberOnly: true,
}

// 상속 예시
interface ID {
  id: string
}

interface BaseEntity {
  createdAt: Date
  updatedAt: Date
}

interface UserEntity extends ID, BaseEntity {
  name: string
}

// 함수 인터페이스 예시
interface PrintProduct {
  // (파라미터 이름: 파라미터 타입): 반환 값
  (product: Product): void
}

const printProduct: PrintProduct = (product) => {
  console.log(product)
}

export {}
