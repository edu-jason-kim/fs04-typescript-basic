type CartItem = {
  id: string
  quantity: number
}

type Cart = CartItem[]

const cart: Cart = [
  { id: 'c001', quantity: 3 },
  { id: 'c002', quantity: 4 },
]

const printCart = (cart: Cart) => {
  cart.forEach(cartItem => {
    console.log(cartItem)
  })
}

export {}
