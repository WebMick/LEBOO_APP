import request from './request.js';

// 商品列表
const exchangeGoods = (param) => {
	return request('exchangeGoods/list', 'POST', param);
}
// 商品详情
const exchangeGoodsDetail = (param) => {
	return request('exchangeGoods/get', 'POST', param);
}

export{
	exchangeGoods,
	exchangeGoodsDetail
}