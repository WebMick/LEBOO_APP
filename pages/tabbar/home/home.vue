<template>
	<view class="home page tabPage">
		<banner class="banner"></banner>
		<div class="header">
			<div class="userBox">
				<i class="icon"></i>
				<p class="text">
					<span>当前无设备</span>
					<!-- <span></span> -->
				</p>
				<i class="arrow"></i>
			</div>
			<navigator class="serach" url="../../searchBluetooth/searchBluetooth"></navigator>
		</div>
		<!-- 下拉刷新小火箭 -->
		<div class="rocketBox">
			<div class="rocket" :class="{refresher: freshing}"></div>
		</div>
		<scroll-view class="content" 
			scroll-y="true" 
			:refresher-threshold="100"
			refresher-enabled="true" 
			refresher-background="none"
			:refresher-triggered="triggered"
			@refresherrefresh="refresherrefresh"
			@refresherrestore="refresherrestore">
			<div class="scoreBox">
				<p class="tips">下拉同步数据</p>
				<div class="address">
					<i class="icon"></i>
					{{city || '--'}}
					<span class="line"></span>
					{{indexData.weather || '--'}}&nbsp;&nbsp;&nbsp;{{indexData.temperature || '--'}}
				</div>
				<div class="score">
					<div class="scoreIn">
						<div class="textBox">
							<div class="numBox">
								<p class="num">89
									<span class="unit">分</span>
								</p>
							</div>
							<p class="sub">最近一次刷牙得分</p>
							<i class="arrow"></i>
						</div>
						<div class="aniBox"></div>
						<p class="money">
							+10
						</p>
					</div>
				</div>
				<p class="subTips">您已超越全国 <span>60%</span> 的用户</p>
			</div>
			<div class="infoList">
				<div class="item">
					<i class="icon brushMode"></i>
					<p class="title">刷牙方案</p>
				</div>
				<div class="item">
					<i class="icon brushHead"></i>
					<p class="title">刷头可用</p>
				</div>
				<div class="item">
					<i class="icon battery_100"></i>
					<p class="title">电量</p>
				</div>
			</div>
			<div class="recordList">
				<div class="head">
					<p class="title">今日记录</p>
					<a class="more">更多</a>
				</div>
				<recordList></recordList>
			</div>
		</scroll-view>
	</view>
</template>

<script>
	import banner from './components/banner.vue';
	import recordList from '../../../components/recordList/recordList.vue';
	import { indexGet } from '../../../request/homeApi.js';
	export default {
		components: {
			banner,
			recordList
		},
		data() {
			return {
				address: '', // 详细地址，查询天气
				city: '',  // 当前城市
				indexData: '', // 首页数据
				triggered: false, // 下拉刷新状态
				freshing: false, // 是否正在刷新
			};
		},
		onShow() {
			this.getLocation();
		},
		methods: {
			// 获取位置 天气
			getLocation () {
				let that = this;
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: function (res) {
						let {country, province, city, district, street, streetNum, poiName, cityCode} = res.address;
						that.address = country + province + city + district + street + streetNum +  poiName;
						that.city = city;
						let param = {
							address: this.address,
							city
						};
						// 获取天气信息等
						indexGet(param).then(res => {
							that.indexData = res.data;
						})
					}
				})
			},
			refresherrefresh () {
				if (this.freshing) return;
				this.freshing = true;
				if (!this.triggered) this.triggered = true; //界面下拉触发，triggered可能不是true，要设为true  
				setTimeout(() => {
					this.triggered = false;
					this.freshing = false;
				}, 3000)
			},
			refresherrestore () {
				this.triggered = false; // 需要重置
				console.log('refresherrestore')
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './home.scss';
</style>
