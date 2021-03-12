<template>
	<view class="navBar" :class="align" :style="{background: backgroud}">
		<slot name="left"></slot>
		<a class="back" v-if="hasBack" @click="back()"></a>
		<p class="title">{{title}}</p>
		<slot name="right"></slot>
	</view>
</template>

<script>
	export default {
		props: {
			align: {
				default: 'left',
				type: String
			},
			hasBack: {
				default: true,
				type: Boolean
			},
			title: {
				default: '',
				type: String
			},
			backgroud: {
				default: '',
				type: String
			}
		},
		methods: {
			back () {
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navBar{
		padding-top: var(--status-bar-height);
		background: $uni-btn-primary;
		height: 44px;
		display: flex;
		align-items: center;
		position: relative;
		&.center{
			justify-content: center;
		}
		&.between{
			justify-content: space-between;
		}
		.back{
			width: 44px;
			height: 44px;
			background: url(../../static/img/back.png) no-repeat center;
			background-size: 17rpx auto;
		}
		.title{
			font-size: 18px;
			color: #fff;
		}
	}
</style>
