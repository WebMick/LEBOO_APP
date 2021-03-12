<template>
	<div class="loginForm">
		<div class="formBox">
			<div class="iptItem">
				<i class="icon account" :class="{ent: account.length > 0}"></i>
				<input type="text" class="ipt" placeholder="请输入账号" v-model="account">
			</div>
			<div class="iptItem">
				<i class="icon password" :class="{ent: password.length > 0}"></i>
				<input :type="pwdType" class="ipt" placeholder="请输入密码" v-model="password">
				<i class="icon eyes" :class="pwdType == 'password' ? 'password' : 'text'" @click="changePwdType()"></i>
			</div>
			<a @click="login()" class="btn login">登录</a>
			<div class="linkBoxs">
				<a class="link">忘记密码</a>
			</div>
		</div>
		<div class="otherLoginBox">
			<a class="item wx"></a>
			<a class="item qq"></a>
			<a class="item wb"></a>
			<a class="item apple"></a>
		</div>
	</div>
</template>

<script>
	import {login} from '../../../request/loginApi.js';
	import { getUser } from '../../../request/userApi.js';
	export default {
		data () {
			return {
				account: '13662524864', // 账号
				password: 'ldsg1994', // 密码
				pwdType: 'password', // 密码输入框类型
			}
		},
		methods: {
			// 切换密码框类型
			changePwdType () {
				this.pwdType = this.pwdType == 'password' ? 'text' : 'password';
			},
			// 登录
			login () {
				let param = {
					account: this.account,
					pushtoken: 'pushtoken',
					password: this.password
				}
				login(param).then(data => {
					if(data.code == 0){
						this.loginSuccess(data.data);
					}
				})
			},
			// 登录成功
			loginSuccess (data) {
				uni.setStorage({
					key: 'token',
					data: data,
					success() {
						uni.showToast({
							title: '登录成功！',
							icon: "none",
							duration: 1000
						});
						uni.switchTab({
							url: '/pages/tabbar/user/user'
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './common.scss';
	$url: '../../../static/img/login/';
	.login{
		margin-top: 110rpx;
	}
	.linkBoxs{
		margin: 30rpx 0;
		overflow: hidden;
		.link{
			float: right;
			font-size: 28rpx;
			color: #999;
		}
	}
	.otherLoginBox{
		display: flex;
		flex: 1;
		padding: 0 40rpx;
		align-items: center;
		justify-content: space-between;
		.item{
			width: 80rpx;
			height: 80rpx;
			&.wx{
				background: url($url + 'loginWx.png') no-repeat;
				background-size: 100% auto;
			}
			&.qq{
				background: url($url + 'loginQQ.png') no-repeat;
				background-size: 100% auto;
			}
			&.wb{
				background: url($url + 'loginWb.png') no-repeat;
				background-size: 100% auto;
			}
			&.apple{
				background: url($url + 'loginApple.png') no-repeat;
				background-size: 100% auto;
			}
		}
	}
</style>
