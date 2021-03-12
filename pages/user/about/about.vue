<template>
	<view class="page about">
		<navBar title="关于我们"></navBar>
		<div class="logoBox">
			<image src="../../../static/logo.png" mode="aspectFill" class="logo"></image>
			<p class="name">力博得口腔</p>
			<p class="version">v2.3.1</p>
			<p class="tips">已是最新版本</p>
		</div>
		<cell value="了解力博得" @click="copy(webUrl)" :isLink="false" :sub="webUrl"></cell>
		<cell value="官方微信"  @click="copy(wx)" :isLink="false" :sub="wx"></cell>
		<cell value="官方微博"  @click="copy(wb)" :isLink="false" :sub="wb"></cell>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	import cell from '@/components/cell/cell.vue';
	import { setClipboardData, getClipboardData } from '@/js_sdk/u-clipboard'
	export default {
		components: {
			navBar,
			cell
		},
		data() {
			return {
				webUrl: 'http://www.lebooo.cn/',
				wx: '力博得声波牙刷',
				wb: '力博得声波牙刷'
			};
		},
		methods: {
			copy (data) {
				setClipboardData(data).then(()=>{
					uni.showToast({
						icon: 'none',
						title: '复制成功！'
					})
				}).catch(()=>{
					uni.showToast({
						icon: 'none',
						title: '复制失败！'
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.logoBox{
		text-align: center;
		font-size: 24rpx;
		.logo{
			display: block;
			margin: 100rpx auto 30rpx;
			width: 150rpx;
			height: 150rpx;
		}
		.tips{
			margin: 20rpx 0;
			color: #999;
		}
	}
</style>
