
const NODE_ENV    = process.env.NODE_ENV; // 环境判断
const dailyRoot   = 'http://app2.lebondsonic.com/lebond-web/', // 测试地址
	  productRoot = 'http://app2.lebondsonic.com/lebond-web/'; // 正式地址
	  
/*
 * @apiRoot：API地址
 * @version：APP版本号
*/	  
export const APPCONFIG = {
	apiRoot: NODE_ENV === 'development' ? dailyRoot : productRoot,
	version: '231',
	appName: '力博得口腔护理',
	webUrl: 'http://www.lebooo.cn/'
};