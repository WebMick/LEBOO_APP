<template>
	<div class="loginForm">
		<div class="formBox">
			<div class="iptItem">
				<i class="icon account" :class="{ent: account.length > 0}"></i>
				<input type="text" class="ipt" placeholder="请输入手机号" v-model="account">
			</div>
			<div class="iptItem">
				<i class="icon password" :class="{ent: code.length > 0}"></i>
				<input type="text" class="ipt" placeholder="请输入验证码" v-model="code">
				<countDown :account="account" />
			</div>
			<div class="iptItem">
				<i class="icon password1" :class="{ent: password1.length > 0}"></i>
				<input :type="pwdType" class="ipt" placeholder="请输入密码(至少六位数)" v-model="password1">
				<i class="icon eyes" :class="pwdType == 'password' ? 'password' : 'text'" @click="changePwdType()"></i>
			</div>
			<div class="iptItem">
				<i class="icon password2" :class="{ent: password2.length > 0}"></i>
				<input :type="pwdType" class="ipt" placeholder="请确认密码(至少六位数)" v-model="password2">
				<i class="icon eyes" :class="pwdType == 'password' ? 'password' : 'text'" @click="changePwdType()"></i>
			</div>
			<a @click="login()" class="btn register">注册</a>
			<p class="tips">
				点击确认即表示您同意
				<a class="link">《用户协议》</a>
				及
				<a class="link">《隐私条款》</a>
			</p>
		</div>
	</div>
</template>

<script>
	import {login} from '../../../request/loginApi.js';
	import countDown from '../../../components/countDown/countDown.vue';
	export default {
		components: {
			countDown
		},
		data () {
			return {
				account: '13640902837', // 手机号
				code: '', // 验证码
				password1: '', // 密码
				password2: '', // 确认密码
				pwdType: 'password', // 密码输入框类型
			}
		},
		methods: {
			changePwdType () {
				this.pwdType = this.pwdType == 'password' ? 'text' : 'password';
			},
			
		}
	}
</script>

<style lang="scss" scoped>
	@import './common.scss';
	.tips{
		margin: 20rpx 0;
		text-align: center;
		font-size: 24rpx;
		color: #c5c5c5;
		.link{
			color: #443fff;
		}
	}
	.register{
		margin-top: 80rpx;
	}
	
</style>
