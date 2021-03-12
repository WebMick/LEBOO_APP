<template>
	<view class="accountSet page">
		<navBar title="账号管理"></navBar>
		<div class="content">
			<cell :icon="headImg" @click="changeHeadImg()" :value="`ID:${userInfo.openid}`"></cell>
			<cell value="昵称" :sub="userInfo.nickname" class="mt10" @click="changeName()"></cell>
			<cell value="电话" :sub="userInfo.account" class="mt10"></cell>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<cell value="出生日期" :sub="date || birthday"></cell>
			</picker>
			<cell value="修改密码"></cell>
		</div>
		<uni-popup ref="changeName" type="dialog" >
		    <uni-popup-dialog type="input" mode="input" :placeholder="userInfo.nickname" title="修改昵称" message="成功消息" :duration="2000" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	import cell from '@/components/cell/cell.vue';
	import { dateFormat } from '@/utils/utils.js';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	import { userModify } from '@/request/userApi.js';
	import { APPCONFIG } from '@/config/APPCONFIG.js';
	export default {
		components: {
			navBar,
			cell,
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		},
		data() {
			return {
				userInfo: '', // 用户信息
				date: ''
			};
		},
		computed: {
			headImg () {
				return APPCONFIG.apiRoot + this.userInfo.headimgurl
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			},
			// 初始生日数据格式化 (后台存储为时间戳)
			birthday () {
				get: {
					return dateFormat(this.userInfo.birthday, 'y-M-d')
				}
			}
		},
		created() {
			this.getUser();
		},
		methods: {
			//  获取用户信息 (本地缓存数据)
			getUser () {
				this.userInfo = uni.getStorageSync('userInfo');
			},
			// 修改生日
			bindDateChange(e) {
				this.date = e.target.value;
				let param = {
					userId: this.userInfo.id,
					birthday: this.date
				};
				userModify(param).then(res => {
					if(res.code === 0){
						this.userInfo.birthday = this.date;
						this.successTips();
					}
				})
			},
			// 设置起始日期
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 显示修改昵称弹窗
			changeName () {
				this.$refs.changeName.open();
			},
			// 修改昵称
			confirm (value) {
				let param = {
					userId: this.userInfo.id,
					nickname: value
				};
				userModify(param).then(res => {
					if(res.code === 0){
						this.userInfo.nickname = value;
						this.successTips();
						this.$refs.changeName.close();
					}
				})
			},
			// 修改个人信息成功提示
			successTips () {
				uni.showToast({
					title: '修改成功！',
					icon: "none",
					duration: 1000
				});
			},
			// 修改用户头像
			changeHeadImg () {
				let that = this;
				uni.showActionSheet({
				    itemList: ['拍照', '从手机相册选择'],
				    success: function (res) {
						let type = {
							0: 'camera',
							1: 'album'
						};
						that.chooseImage(type[res.tapIndex])
				    }
				});
			},
			// 选择图片 相机 camera 相册 album
			chooseImage (type) {
				let token = uni.getStorageSync('token'),
					that  = this;
				uni.chooseImage({
				    count: 1, // 图片数量
				    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
				    sourceType: [type], // 从相册 手机  选择
				    success: function (res) {
						const tempFilePaths = res.tempFilePaths;
						uni.uploadFile({
							url: 'http://app2.lebondsonic.com/lebond-web/file/upload', 
							filePath: tempFilePaths[0],
							name: 'file',
							success: (uploadFileRes) => {
								let { data } = uploadFileRes;
								data = JSON.parse(data);
								let param = {
									userId: that.userInfo.id,
									headimgurl: data.data
								};
								// 修改个人信息- 头像
								userModify(param).then(res => {
									if(res.code === 0){
										that.userInfo.headimgurl = data.data;
										that.successTips();
									}
								})
							}
						});
				    }
				});
			}
		}
	}
</script>

<style lang="scss">

</style>
