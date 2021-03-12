<template>
	<view class="login">
		<div class="tabsBox">
			<div class="tabs">
				<div class="item" :class="{act: tabsAct == 0}" @click="changeTabs(0)">登录</div>
				<div class="item" :class="{act: tabsAct == 1}" @click="changeTabs(1)">注册</div>
			</div>
		</div>
		<component class="formWrap" :is="showForm"></component>
	</view>
</template>

<script>
	import loginForm from './components/login.vue';
	import registerForm from './components/register.vue';
	export default {
		components: {
			loginForm,
			registerForm
		},
		data() {
			return {
				tabsAct: 0, // 登录/注册 0/1
				showForm: 'loginForm', // 当前显示组件
			}
		},
		methods: {
			// 切换注册/登录
			changeTabs (type) {
				if(this.tabsAct != type){
					let components = {
						0: 'loginForm',
						1: 'registerForm'
					};
					this.tabsAct = type;
					this.showForm = components[type];
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
$url: '../../static/img/login/';

.login{
	padding: var(--status-bar-height) 28rpx 0;
	position: relative;
	overflow: hidden;
	background: url($url + 'loginBg.jpg') no-repeat;
	background-size: 100% auto;
	display: flex;
	flex-direction: column;
	height: 100vh;
	box-sizing: border-box;
	&:before, &:after{
		content: '';
		position: absolute;
	}
	.tabsBox{
		margin-top: 140rpx;
		overflow: hidden;
		padding: 15rpx 0;
		.tabs{
			display: flex;
			float: left;
			overflow: hidden;
			border-radius: 35rpx;
			background-color: #9471fd;
			box-shadow: 5rpx 5rpx 10rpx rgba(45,0,176,.6);
			.item{
				width: 140rpx;
				height: 70rpx;
				line-height: 65rpx;
				text-align: center;
				color: #fff;
				border-radius: 35rpx;
				font-size: 30rpx;
				&.act{
					background-color: #fff;
					color: #403cf9;
				}
			}
		}
	}
	.formWrap{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
}
</style>
