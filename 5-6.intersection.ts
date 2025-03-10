interface ID {
  id: string
}

interface Timestamp {
  createdAt: Date
  updatedAt: Date
}

type Product = ID & Timestamp & {
  name: string
  price: number
  isMemberOnly?: boolean
}

interface User extends ID, Timestamp {
  username: string
  email: string
}

const product: Product = {
  id: 'c001',
  name: '바람막이',
  price: 129000,
  createdAt: new Date(),
  updatedAt: new Date(),
}

export {}
