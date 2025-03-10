enum ClothingSize {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

interface Product {
  id: string
  name: string
  price: number
  isMemberOnly?: boolean
}

interface ClothingProduct extends Product {
  sizes: ClothingSize[]
  color: string
}

// type ShoeSize = 230 | 240 | 250 | 260 | 270
type ShoeSize = `${1 | 2}${1 | 2 | 3 | 4 | 5 | 6 | 7}0`

interface ShoeProduct extends Product {
  sizes: ShoeSize[]
  handmade: boolean
}

function printProductSizes (product: ClothingProduct | ShoeProduct) {
  // Type Narrowing
  if ('color' in product) {
    console.log('ClothingProduct 타입입니다.')
  }

  if ('handmade' in product) {
    console.log('ShoeProduct 타입입니다.')
  }

  const availableSizes = product.sizes.join(", ")
  console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`)
}

const shoeProduct: ShoeProduct = {
  id: 's001',
  handmade: true,
  name: '수제화',
  price: 129000,
  sizes: ['260', '270']
}

export {}
