import request from './request.js';
const login = (param) => {
	return request('user/login', 'POST', param);
}
const sendRegVerifyCode = (param) => {
	return request('user/sendRegVerifyCode', 'POST', param);
}

export {
	login,
	sendRegVerifyCode
}