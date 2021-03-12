import request from './request.js';

const indexGet = (param) => {
	return request('index/get', 'POST', param);
}

export {
	indexGet
}