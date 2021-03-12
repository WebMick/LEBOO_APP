<template>
	<view class="find page tabPage">
		<navBar title="发现" align="center" :hasBack="false"></navBar>
		<tabNav :options="tabOptions" :defaultActive="1" @changeTabs="changeTabs"></tabNav>
		<div class="content">
			<!-- 兑换 -->
			<div class="list">
				<div class="item" 
					v-for="item in listData" 
					@click="toDetail(item.id)"
					:key="'item' + item.id">
					<img class="img" :src="mainImg(item.mainImg)" />
					<div class="textBox">
						<p class="title">{{item.mainTitle}}</p>
						<p class="money">{{item.goldNum}}</p>
					</div>
				</div>
			</div>
			<!-- 商城 -->
			<!-- <web-view :webview-styles="webviewStyles" src="https://www.baidu.com"></web-view> -->
		</div>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	import tabNav from '@/components/tabNav/tabNav.vue';
	import { exchangeGoods } from '@/request/findApi.js';
	import { APPCONFIG } from '@/config/APPCONFIG.js';
	export default {
		components: {
			navBar,
			tabNav
		},
		computed: {
			mainImg () {
				return (img)=> {
					return APPCONFIG.apiRoot + img
				}
			}
		},
		data() {
			return {
				listData: [],
				tabOptions: [
					{ name: '兑换', id: 0 },
					{ name: '商城', id: 1 }
				],
				params: {
					pageSize: 10,
					pageNo: 1
				},
			};
		},
		created () {
			this.exchangeGoods()
		},
		methods: {
			exchangeGoods () {
				exchangeGoods(this.params).then(res => {
					this.listData = res.rows;
				})
			},
			changeTabs (active) {
				console.log(active)
			},
			toDetail (id) {
				uni.navigateTo({
					url: `../../find/goodsDetail/goodsDetail?id=${id}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabble{
		background-color: #fff;
	}
	.list{
		overflow: hidden;
		columns: 2;
		margin: 10rpx 20rpx 0;
		column-gap: 20rpx;
		.item{
			break-inside: avoid;
			margin-bottom: 20rpx;
			overflow: hidden;
			background-color: #fff;
			border-radius: 0 0 20rpx 20rpx;
			font-size: 26rpx;
			overflow: hidden;
			.img{
				display: block;
				width: 100%;
				height: auto;
			}
			.textBox{
				padding: 20rpx;
				.money{
					margin-top: 20rpx;
					display: flex;
					font-size: 28rpx;
					&:before{
						content: '';
						width: 35rpx;
						height: 35rpx;
						background: url(../../../static/img/money.png) no-repeat;
						background-size: 100%auto;
						margin-right: 20rpx;
					}
				}
			}
			
		}
	}
</style>
