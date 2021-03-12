<template>
	<view class="searchBluetooth page">
		<navBar title="设备搜索"></navBar>
		<div class="searchAni">
			<div class="aniBox" :class="{loading: loading}">
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
			</div>
			<p class="text">{{serachText}}</p>
		</div>
		<div class="list content mt20">
			<div class="item" v-for="item in list" :key="item.devices[0].deviceId" @click="createBLEConnection(item.devices[0].deviceId)">
				<div class="left">
					<p> {{item.devices[0].name}}</p>
					<p class="sub">{{item.devices[0].deviceId}}</p>
				</div>
				<div class="center">{{item.devices[0].RSSI}}</div>
				<a class="btn">连接</a>
			</div>
		</div>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	export default {
		components: {
			navBar
		},
		data() {
			return {
				loading: true,
				list: [],
				serachText: '点击蓝牙图标搜索附近牙刷',
				deviceId: '', // 当前连接蓝牙 deviceId
			};
		},
		created() {
			// #ifdef APP-PLUS
			this.openBluetoothAdapter();
			// #endif
		},
		methods: {
			// 初始化蓝牙
			openBluetoothAdapter () {
				uni.openBluetoothAdapter({
					success:(res)=> { //已打开
						uni.getBluetoothAdapterState({//蓝牙的匹配状态
							success:(res1)=>{
							console.log(res1,'“本机设备的蓝牙已打开”')	
							// 开始搜索蓝牙设备
							this.startBluetoothDeviceDiscovery()
							},
							fail(error) {
								uni.showToast({icon:'none',title: '查看手机蓝牙是否打开'});
							}
						});
						
					},
					fail:err=>{ //未打开 
						uni.showToast({icon:'none',title: '查看手机蓝牙是否打开'});
					}
				})
			},
			// 开始搜索蓝牙设备
			startBluetoothDeviceDiscovery(){
				uni.startBluetoothDevicesDiscovery({
					success: (res) => {
						console.log('startBluetoothDevicesDiscovery success', res)
						// 发现外围设备
						this.onBluetoothDeviceFound()
					},fail:err=>{
						console.log(err,'错误信息')
					}
				})
			},
			// 发现外围设备
			onBluetoothDeviceFound() {
				// console.log("zhixing")
				uni.onBluetoothDeviceFound((res) => {
					// console.log(res)
					// ["name", "deviceId"]
					// 吧搜索到的设备存储起来，方便我们在页面上展示
					if(this.list.indexOf(res.devices[0].deviceId)==-1){
						this.list.push(res);
						this.serachText = '搜索设备中....';
						if(this.list.length > 10){
							this.stopBluetoothDevicesDiscovery();
						}
					}
				})
			},
			// 连接设备
			createBLEConnection(deviceId){
				let that = this;
				//data里面建立一个deviceId，存储起来
				this.deviceId = deviceId
				console.log(deviceId);
				uni.showLoading({
				    title: '连接中...'
				});
				//连接蓝牙
				uni.createBLEConnection({
				// 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
				  deviceId:this.deviceId,
				  success(res) {
				  	//防止在这里面取不到this，古在外面用that存储了this
					that.stopBluetoothDevicesDiscovery();
					uni.hideLoading();
					uni.showToast({
						title: '蓝牙连接成功'
					})
					console.log(res)
					console.log("蓝牙连接成功")
				  },fail(res) {
					console.log("蓝牙连接失败",res);
					that.stopBluetoothDevicesDiscovery();
					uni.showToast({
						title: '蓝牙连接失败'
					})
				  }
				})
			},
			// 停止搜寻蓝牙设备
			stopBluetoothDevicesDiscovery(){ 
				this.serachText = '点击蓝牙图标搜索附近牙刷';
				uni.stopBluetoothDevicesDiscovery({ 
					success: e => {
						this.loading = false
						console.log('停止搜索蓝牙设备:' + e.errMsg); 
					},
					fail: e => {
						console.log('停止搜索蓝牙设备失败，错误码：' + e.errCode);
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.searchBluetooth{
		.searchAni{
			position: relative;
			height: 500rpx;
			background: $uni-bg-color-box;
			.aniBox{
				position: relative;
				height: 400rpx;
				width: 400rpx;
				margin: 17rpx auto;
				border-radius: 50%;
				overflow: hidden;
				&.loading{
					.item{
						animation: searchAni 1s linear infinite both;
					}
				}
				.item{
					position: absolute;
					border-radius: 50%;
					&:nth-child(1){
						width: 60rpx;
						height: 60rpx;
						top: 170rpx;
						left: 170rpx;
						background: url(../../static/img/searchBluetooth/bluetooth.png);
						background-size: 100% 100%;
						z-index: 9;
						animation: none !important;
					}
					&:nth-child(2){
						background: rgba(76,85,255,.4);
						width: 130rpx;
						height: 130rpx;
						top: 135rpx;
						left: 135rpx;
					}
					&:nth-child(3){
						background: rgba(76,85,255,.3);
						width: 220rpx;
						height: 220rpx;
						top: 90rpx;
						left: 90rpx;
						animation-delay: 0.2s;
					}
					&:nth-child(4){
						background: rgba(76,85,255,.2);
						width: 310rpx;
						height: 310rpx;
						top: 45rpx;
						left: 45rpx;
						animation-delay: 0.4s;
					}
					&:nth-child(5){
						background: rgba(76,85,255,.1);
						width: 400rpx;
						height: 400rpx;
						top: 0;
						left: 0;
						animation-delay: 0.6s;
					}
				}
			}
			.text{
				color: #666;
				font-size: 26rpx;
				text-align: center;
			}
		}
		.list{
			.item{
				display: flex;
				align-items: center;
				padding: 20rpx 40rpx;
				margin-bottom: 10rpx;
				background: $uni-bg-color-box;
				.left{
					width: 370rpx;
					font-size: 28rpx;
					.sub{
						color: #c5c5c5;
						font-size: 24rpx;
					}
				}
				.center{
					flex: 1;
				}
				.btn{
					width: 122rpx;
					height: 58rpx;
					text-align: center;
					line-height: 58rpx;
					background: $uni-btn-primary;
					color: #fff;
					border-radius: 29rpx;
				}
			}
		}
	}
	@keyframes searchAni{
		0%{
			transform: scale(0.6);
			opacity: 0.3;
		}
		70%{
			opacity: 0.9;
		}
		100%{
			transform: scale(1.1) ;
			opacity: 0.3;
		}
	}
</style>
