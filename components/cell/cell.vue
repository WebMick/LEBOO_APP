<template>
	<view @click="click()" class="cell" :class="{hasIcon: icon}">
		<image :src="icon" v-if="icon" alt="" class="icon">
		<p class="value">{{value}}</p>
		<div class="subBox" v-if="sub || isLink">
			<p class="sub" v-if="sub">{{sub}}</p>
			<i class="arrow" v-if="isLink"></i>
		</div>
		<slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		props: {
			icon: {
				default: '',
				type: String
			},
			value: {
				default: '',
				type: String
			},
			sub: {
				default: '',
				type: String
			},
			isLink: {
				default: true,
				type: Boolean
			},
			arrowDirection: {
				default: 'right',
				type: String
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			click () {
				this.$emit('click');
			}
		} 
	}
</script>

<style lang="scss" scoped>
	.cell{
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		position: relative;
		background: $uni-bg-color-box;
		font-size: 28rpx;
		&.hasIcon{
			padding-left: 100rpx;
		}
		.icon{
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 30rpx;
			width: 60rpx;
			height: 60rpx;
		}
		.subBox{
			display: flex;
			align-items: center;
		}
		.arrow{
			margin-left: 40rpx;
			width: 16rpx;
			height: 28rpx;
			background: url(../../static/img/arrow2Icon.png);
			background-size: 100% auto;
		}
		.sub{
			font-size: 26rpx;
			color: #999;
			// margin-right: 40rpx;
		}
	}
</style>
