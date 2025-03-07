let product = {
	id: 'c001',
	name: '라이트 윈드 브레이커',
	price: 129000,
	sizes: ['M', 'L', 'XL'],
};

const newProduct = {
	id: 'c002',
	name: '다크 윈드 브레이커',
	price: 139000,
	sizes: [90, 95, 100, 105, 100],
};

product = newProduct;

export {} // 파일을 모듈화 하기 위함 (변수를 다른 파일과 공유하지 않기 위함)
