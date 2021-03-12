import request from './request.js';
// 获取用户信息
const getUser = () => {
	return request('user/get', 'POST');
}

// 修改用户信息
const userModify = (param) => {
	return request('user/modify', 'POST', param);
}

// 获取金币记录
const goldRecord = () => {
	return request('goldRecord/list', 'POST');
}

// 签到记录
const signRecord = (param) => {
	return request('userSignIn/get', 'POST', param);
}

export {
	getUser,
	userModify,
	goldRecord,
	signRecord
}