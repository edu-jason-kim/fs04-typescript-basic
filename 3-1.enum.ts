enum Size { XS, S, M, L, XL } // index가 기본값으로 할당 됨

const stockItem: { id: string, size: Size } = {
  id: 'c001',
  size: Size.S,
}

enum Size2 {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

const item2: { id: string, size: Size2 } = {
  id: 'c001',
  size: Size2.S,
}

const stock: {
  [productId: string]: {
    // size는 키 이름이라 아무 문자가 와도 됨
    [size in Size2]: number
  }
} = {
  'c001': {
    // 키에 [] 대괄호가 들어가는 건, 값을 키로 할당하기 위함
    [Size2.XS]: 0,
    [Size2.S]: 10,
    [Size2.M]: 10,
    [Size2.L]: 10,
    [Size2.XL]: 10,
  }
}


// model 예시
enum Model {
  GPT4o = 'GTP4o'
}

const chat = (model: Model) => {
  switch (model) {
    case Model.GPT4o: {
      // GPT API 호출 로직
    }
  }
}

export {}
