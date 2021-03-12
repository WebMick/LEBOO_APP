<template>
	<view class="list">
		<div class="item">
			<div class="left">
				<p class="title">66:66</p>
				<p>2020-20-20</p>
			</div>
			<div class="center">
				<div class="score">
					<i class="icon"></i>
					<span>66</span>
				</div>
				分
			</div>
			<div class="right">
				时长 <span>03</span> min <span>03</span> s
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.list{
		.item{
			padding: 17rpx 0;
			display: flex;
			align-items: center;
			color: #999;
			position: relative;
			&:after{
				content: '';
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 16rpx;
				height: 28rpx;
				background:url(../../static/img/arrow2Icon.png);
				background-size: 100% 100%;
			}
			.left{
				width: 170rpx;
				font-size: 20rpx;
				.title{
					font-size: 26rpx;
					color: #000;
				}
			}
			.center{
				width: 210rpx;
				display: flex;
				align-items: center;
				font-size: 26rpx;
				.score{
					width: 75rpx;
					height: 75rpx;
					background: #6e43fb;
					border-radius: 50%;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
					margin-right: 10rpx;
					
				}
			}
			.right{
				flex: 1;
				font-size: 26rpx;
				span{
					color: #000;
					margin: 0 10rpx;
				}
			}
		}
	}
</style>
