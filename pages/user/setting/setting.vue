<template>
	<view class="setting page">
		<navBar title="更多设置"></navBar>
		<div class="content">
			<div class="list">
				<cell value="我的福利"></cell>
				<cell value="地址管理"></cell>
				<cell value="用户协议"></cell>
				<cell value="隐私条例"></cell>
				<cell value="消息通知" :isLink="false" class="switch mt10">
					<template #right>
						<switch class="switch" checked="true" @change="" color="#5a40ff" />
					</template>
				</cell>
				<navigator url="../about/about">
					<cell value="关于我们"></cell>
				</navigator>
				<cell value="分享应用" sub="5金币/天" class="mt10"></cell>
			</div>
			<a @click="loginout()" class="btnLoginout">退出</a>
		</div>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	import cell from '@/components/cell/cell.vue';
	export default {
		components: {
			navBar,
			cell
		},
		data() {
			return {
				
			};
		},
		methods: {
			// 退出登录
			loginout () {
				uni.showModal({
				    title: '退出登录？',
				    success: function (res) {
				        if (res.confirm) {
				            uni.removeStorageSync('userInfo');
				            uni.removeStorageSync('token');
				            uni.navigateTo({
				                url: '../../login/index'
				            });
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	.btnLoginout{
		display: block;
		margin: 105rpx 40rpx 0;
		line-height: 85rpx;
		text-align: center;
		color: #fff;
		background: $uni-btn-primary;
		border-radius: 43rpx;
		font-size: 30rpx;
	}
</style>
