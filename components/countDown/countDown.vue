<template>
	<view class="countDown" :class="{gray: !isClick}" @click="countDown()">
		{{text}}
	</view>
</template>

<script>
	import {sendRegVerifyCode} from '../../request/loginApi.js';
	export default {
		props: {
			type: {
				default: ''
			},
			account: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				text: '获取验证码',
				timer: '',
				countTime: 60,
				isClick: true
			};
		},
		methods: {
			countDown () {
				if(this.isClick){
					// 输入框校验
					if(!this.account || this.account.length < 11){
						uni.showToast({
							icon: 'none',
							title: '请输入正确的手机号'
						});
						return;
					}
					// 发送验证码
					let timestamp = new Date().getTime();
					let params = {
						account: this.account,
						sigh: '4a701a8ed4d561c0e8a42332b7c5e3be',
						timestamp
					}
					sendRegVerifyCode(params).then(data => {
						if(data.code === 0){
							this.isClick = false;
							// 验证码发送成功 开启倒计时
							this.timer = setInterval(()=>{
								this.countTime--;
								this.text = `${this.countTime}s`;
								// 倒计时结束 关闭计时器
								if(this.countTime == 0){
									this.countTime = 60;
									this.isClick = true;
									this.text = '获取验证码';
									clearInterval(this.timer);
								}
							}, 1000)
						}
					});
				}else{
					uni.showToast({
						icon: 'none',
						title: '请勿重新发送！'
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
.countDown{
	width: 200rpx;
	height: 70rpx;
	line-height: 70rpx;
	text-align: center;
	border-radius: 35rpx;
	background: $uni-btn-primary;
	color: #fff;
	font-size: 30rpx;
	&.gray{
		background: #c5c5c5;
	}
}
</style>
