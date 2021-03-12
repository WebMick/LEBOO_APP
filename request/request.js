/*
* 
*/
import {APPCONFIG} from '../config/APPCONFIG.js';

const { apiRoot } = APPCONFIG;

const request = (url, method, data = {}, rootUrl) => {
	let baseParams = {
		language: 'zh',
		isAndroid: 1,
		version: 231
	}
	let api = rootUrl || apiRoot;
	let headers = {};
	let token = uni.getStorageSync('token');
	if(token && url.indexOf('login') < 0){
		baseParams.token = token;
	}
	(method == 'POST') && (headers['Content-type'] = 'application/x-www-form-urlencoded');
	return uni.request({
		url: api + url,
		method,
		data: {
			...data,
			...baseParams
		},
		dataType: 'json',
		header: headers
	}).then(res => {
		if(res[1].statusCode === 200 && res[1].data.code == '0'){
			return res[1].data;
		}else{
			throw res[1].data
		}
	}).catch(err => {
		uni.showToast({
			title: err.msg,
			icon: "none",
			duration: 1000
		});
		if(err.code == '-10'){
			uni.navigateTo({
				url: '/pages/login/index',
				fail(err) {
					console.log(err)
				}
			})
			
		}
		return err;
	})
}

export default request;
