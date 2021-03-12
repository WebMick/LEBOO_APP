<template>
	<view class="user page tabPage" v-if="userInfo">
		<navBar align="between" :title="userInfo.nickname" :hasBack="false">
			<template #left>
				<navigator url="" class="headerIcon msg">
					<span class="unReadCount" v-if="userInfo.unReadCount > 0"></span>		
				</navigator>
			</template>
			<template #right>
				<navigator url="../../user/setting/setting" class="headerIcon set"></navigator>
			</template>
		</navBar>
		<navigator url="../../user/accountSet/accountSet" class="userInfo">
			<div class="infoBox">
				<div class="headImg">
					<img :src="headImg" alt="">
				</div>
				<div class="textBox">
					<p class="name">ID:{{userInfo.openid}}</p>
					<p class="time">已加入力博得238天</p>
					<p class="money"><i class="icon"></i> {{userInfo.goldNum}}&nbsp;&nbsp;枚</p>
				</div>
			</div>
		</navigator>
		<div class="list1">
			<div class="item">
				<i class="icon brush"></i>
				<p class="title">牙刷列表</p>
			</div>
			<div class="item">
				<i class="icon week"></i>
				<p class="title">刷牙周报</p>
			</div>
			<div class="item">
				<i class="icon guide"></i>
				<p class="title">使用指南</p>
			</div>
		</div>
		<div class="content">
			<div class="list2">
				<cell value="勋章等级" icon="../../../static/img/user/icon01.png" class="mt20"></cell>
				<navigator url="../../user/goldRecord/goldRecord">
					<cell value="金币记录" icon="../../../static/img/user/icon02.png" class="mt20"></cell>
				</navigator>
				<navigator url="../../user/signRecord/signRecord">
					<cell value="签到记录" icon="../../../static/img/user/icon03.png"></cell>
				</navigator>
				<cell value="订单管理" icon="../../../static/img/user/icon04.png" class="mt20"></cell>
				<cell value="反馈帮助" icon="../../../static/img/user/icon05.png"></cell>
			</div>
		</div>
	</view>
</template>

<script>
	import { getUser } from '@/request/userApi.js';
	import cell from '@/components/cell/cell.vue';
	import { APPCONFIG } from '@/config/APPCONFIG.js';
	import navBar from '@/components/navBar/navBar.vue';
	export default {
		components: {
			navBar,
			cell
		},
		computed: {
			headImg () {
				return APPCONFIG.apiRoot + this.userInfo.headimgurl
			}
		},
		data() {
			return {
				userInfo: {}, // 用户信息数据
			};
		},
		onShow () {
			this.getUser();
		},
		methods: {
			getUser () {
				// 获取用户信息
				getUser().then(res => {
					uni.setStorage({
						key: 'userInfo',
						data: res.data
					});
					this.userInfo = res.data;
				})
				
			},
		}
	}
</script>

<style lang="scss" scoped>
@import './user.scss';
</style>
