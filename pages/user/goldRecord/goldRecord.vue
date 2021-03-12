<template>
	<view class="goldRecord page">
		<navBar title="金币记录" backgroud="none">
			<template #right>
				<view class="navRight">兑换</view>
			</template>
		</navBar>
		<div class="money">
			<p class="tit">我的金币</p>
			<p class="num">
				<i class="icon"></i>
				<span class="txt">{{listData.gold || '--'}}</span>
			</p>
		</div>
		<div class="content">
			<div class="list">
				<div class="item" v-for="item in listData.goldRecord" :key="item.id">
					<div class="left">
						<p class="title">{{item.content}}</p>
						<p class="time">{{dateFormat(item.createTime)}}</p>
					</div>
					<div class="right">
						<span class="num">{{item.num}}</span>
						<i class="icon"></i>
					</div>
				</div>
				<p class="tips">没有更多的记录了...</p>
			</div>
		</div>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	import {goldRecord} from '@/request/userApi.js';
	import {dateFormat} from '@/utils/utils.js';
	export default {
		components: {
			navBar
		},
		data() {
			return {
				listData: [], // 数据
			};
		},
		computed: {
			dateFormat () {
				return (time) => {
					return dateFormat(time, 'y-M-d h:m:s')
				}
			}
		},
		created() {
			this.goldRecord();
		},
		methods: {
			goldRecord () {
				goldRecord().then(data =>{
					this.listData = data.data;
				})
			}
		}
	}
</script>

<style lang="scss">
.goldRecord{
	background: url(../../../static/img/gold/bg.jpg) no-repeat top center;
	background-size: 100% auto;
	.navRight{
		position: absolute;
		right: 0;
		padding: 0 50rpx;
		bottom: 0;
		line-height: 44px;
		color: #fff;
	}
	.money{
		overflow: hidden;
		padding-left: 84rpx;
		height: calc(459rpx - 44px - var(--status-bar-height));
		display: flex;
		flex-direction: column;
		justify-content: center;
		.tit{
			font-size: 28rpx;
			color: #fff;
		}
		.num{
			display: flex;
			align-items: center;
			margin-top: 30rpx;
			.icon{
				width: 70rpx;
				height: 56rpx;
				background: url(../../../static/img/gold/gold.png) no-repeat;
				background-size: 100% auto;
			}
			.txt{
				margin-left: 10rpx;
				font-weight: bold;
				font-size: 72rpx;
				color: #fff;
				text-shadow: 0 0 5px rgba(0,0,0,.6);
			}
		}
	}
	.list{
		overflow: hidden;
		.item{
			padding: 20rpx 40rpx;
			margin-top: 10rpx;
			background: $uni-bg-color-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				font-size: 28rpx;
			}
			.time{
				margin-top: 10rpx;
				font-size: 24rpx;
				color: #c5c5c5;
			}
			.right{
				display: flex;
				// justify-content: space-between;
				// min-width: 120rpx;
				.num{
					font-size: 30rpx;
				}
				.icon{
					margin-left: 20rpx;
					width: 38rpx;
					height: 38rpx;
					background: url(../../../static/img/money.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}
		.tips{
			padding: 30rpx 0;
			text-align: center;
			font-size: 24rpx;
			color: #999999;
		}
	}
}
</style>
