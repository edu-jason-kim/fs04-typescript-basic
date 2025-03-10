const stock: {
  [productId: string]: number
} = {
  'c001': 4,
  'c002': 10
}

const cart: string[] = [];

function addToCart(id: string, quantity: number): boolean {
  console.log(id, quantity)
  return true
}

// optional: optional prameter는 항상 마지막에 위치해야 한다.
function addToCart2(id: string, quantity?: number): boolean {
  console.log(id, quantity)
  return true
}

// default value: 기본값이 들어가는 자리는 자동으로 optional 타입으로 설정된다.
// function addToCart3(id: string, quantity = 1): boolean {
function addToCart3(id: string, quantity: number = 1): boolean {
  console.log(id, quantity)
  return true
}

// rest parameter: rest parameter는 항상 마지막에 위치해야 한다.
function addManyToCart(quantity: number, ...ids: string[]): boolean {
  console.log(quantity) // 1
  console.log(ids) // ["c001", "c002"]
  return true
}

addManyToCart(1, 'c001', 'c002')

const codeitMall: {
  stock: { [id: string]: number };
  addToCart: (id: string, quantity: number) => boolean;
  addManyToCart: (quantity: number, ...ids: string[]) => boolean;
} = {
  stock,
  addToCart,
  addManyToCart,
}

codeitMall.addToCart('c001', 4)

export {}
