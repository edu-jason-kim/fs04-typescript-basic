// 코드잇의 Product API 서비스인데, interface로 접근하기 어려운 상황 가정
interface PrivateProduct {
  id: string;
  name: string;
  price: number;
  isMemberOnly?: boolean;
}

const product: PrivateProduct = {
  id: "c001",
  name: "바람막이1",
  price: 129000,
};

const getProduct = async () => product

const productKeys = Object.keys(product) as (keyof PrivateProduct)[]

productKeys.forEach((key) => {
  console.log(key, product[key as keyof PrivateProduct]);
});

// 타입스크립트의 Typeof 연산자: 특정 값에서 타입을 뽑아내는 연산자
const productFromCodeIt = await getProduct()
type Product = typeof productFromCodeIt // 타입스크립트 연산자

const myProduct: Product = {
  id: 'c002',
  name: '우리 자켓',
  price: 129000,
  isMemberOnly: false,
}

// 자바스크립트의 typeof 연산자: 특정 값에 대한 Expression, 타입스크립트 연산자와 다름!!
typeof '' // => string
typeof 1  // => number

export {}