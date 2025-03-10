// any: javascript와 타입을 동일하게 동작하게 만드는 타입
let product: any = 'abc'
product = 123

// 로컬스토리지에 어떤 값이 있을지 타입으로 알 수 없기 때문에 any를 반환할 수 밖에 없음
const localStorageData = JSON.parse('')

// JSON.parse 메서드의 반환타입 강제 후 product2에 할당
const product2 = JSON.parse('product2') as { id: string } 

// 프로덕트 타입에 any 타입의 값을 할당
const product3: { id: string } = JSON.parse('product3')

// https://postcode.map.daum.net/guide
// 외부 script를 html에서 선언해서 사용할 때, window 객체에는 해당 타입이 없으므로
// any를 통해 타입에러를 쉽게 해결해놓고 넘어갈 수 있음
new (window as any).daum.Postcode({
  oncomplete: function(data: any) {}
}).open();

export {}
