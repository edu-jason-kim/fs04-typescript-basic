import axios from "axios"

const shoeSizes: number[] = [230, 240, 250]
shoeSizes.map(shoeSize => {})

const clothingSizes: string[] = ['M', 'L', 'XL']
clothingSizes.map(clothingSize => {})

interface Product { id: string, price: number }
const products: Product[] = [
  { id: 'c001', price: 129000 },
  { id: 'c002', price: 139000 },
]
products.map(product => {})

// 제네릭 함수 만들기, Generic 파라미터는 보통 T, U, V 캐릭터를 쓴다.
function printArray<T> (items: T[]) {
  for (const item of items) {
      console.log(item)
  }
}

function customMap<T> (): T[] {
  return []
}

// generic을 명시적으로 작성한 경우
customMap<string>()
printArray<string>(['', '123'])

// generic 타입을 추론한 경우
printArray([1, 2, 3]) // function printArray<number>(items: number[]): void
printArray(['', ''])  // function printArray<string>(items: string[]): void
printArray(products)  // function printArray<Product>(items: Product[]): void


// 예시 1: Array Map에서 generic을 사용하는 방법
const getProductPriceLabel = (products: Product[]): string[] => {
  // map에 generic으로 string을 명시하여, string의 배열만 반환되도록 만듬
  const priceLabels = products.map<string>(product => {
    return `productID: ${product.id}의 가격은 ${product.price}입니다.`
  })

  return priceLabels
}

// 예시 2: Array forEach 메서드 만들어보기
const forEach = <T>(items: T[], callback: (value: T) => void) => {
  for (const item of items) {
    callback(item)
  }
}

// generic 타입을 추론하여 사용
forEach(products, (product) => {
  console.log(product)
})

// 명시적으로 generic 타입을 지정
forEach<string>([''], (str) => {
  console.log(str)
})

// # 인터페이스에 generic을 사용
interface SizeProduct<T> extends Product {
  sizes: T[]
}

interface IClothingProduct extends SizeProduct<string> {}
interface IShoeProduct extends SizeProduct<number> {}

const shoe: IShoeProduct = {
  id: 's001',
  price: 129000,
  sizes: [170, 180]
}

// # Type Alias Generic 활용하기
type ClothingProduct = SizeProduct<string>
type ShoeProduct = SizeProduct<number>

type Pair<T> = [T, T]
const point: Pair<number> = [12, 23]
const fullname: Pair<string> = ['김', '선재']

// # Set
const productSet = new Set<Product>()
productSet.add(products[0]) // product add 허용 O
productSet.add(123) // 숫자 허용 X

// # Map
const map = new Map<string, Product>()
products.forEach(product => {
  map.set(product.id, product)
})

// # Record
const stock1: { [productId: string]: number } = { 'c001': 4 }
const stock2: Record<string, number> = { 'c001': 4 }
const stock3: Record<Product['id'], number> = { 'c001': 4 }

// # Axios
axios.get<Product>('/product/1').then(response => {
  const product = response.data
  console.log(product.id, product.price)
})

// # 다른 유용한 타입들: Pick, Omit
interface Product2 {
  id: string
  name: string
  price: number
  createdAt: Date
  updatedAt: Date
}

type ProductInfo1 = Pick<Product2, 'name' | 'price'>
type ProductInfo2 = Omit<Product2, 'id' | 'createdAt' | 'updatedAt'>

// # Union 제거하기: Exclude
type Promotion = '프로모션'
type Welcome = '웰컴'
type Internal = '직원전용'

type Coupon = Promotion | Welcome | Internal
type PublicCoupon = Exclude<Coupon, Internal> // type PublicCoupon = "프로모션" | "웰컴"
type Coupon2 = PublicCoupon | Internal // type Coupon2 = "직원전용" | PublicCoupon

// # Paremeter, Return Type 가져오기
// 외부 API에서 호출하는 함수다, 그런데 파라미터 타입이 필요함 (wrapper 만들기 등)
function addToCart(id: string, quantity: number): boolean { return false }

type AddToCartParameters = Parameters<typeof addToCart>
type AddToCartReturnType = ReturnType<typeof addToCart>

const addToCartWrapper = (...params: AddToCartParameters): AddToCartReturnType => {
  // wrapper로서의 동작들 수행, 로깅 등, 에러 핸들링
  console.log(params)
  
  try {
    return addToCart(...params)
  } catch (error) {
    console.error('에러발생!!')
    throw error
  }
}

// 함수 타입 정의해서 사용
type AddToCartWrapper =
  (...params: AddToCartParameters) => AddToCartReturnType

const addToCartWrapper2: AddToCartWrapper = (...params) => {
  // wrapper로서의 동작들 수행, 로깅 등, 에러 핸들링
  console.log(params)
  
  try {
    return addToCart(...params)
  } catch (error) {
    console.error('에러발생!!')
    throw error
  }
}

export {}
