<template>
	<view class="page goodsDetail">
		<navBar title="商品详情"></navBar>
		<scroll-view scroll-y="true" class="content">
			<view class="imgBox">
				<img :src="mainImg(detailData.mainImg)" />
			</view>
			<div class="infoBox">
				<p class="title">{{detailData.mainTitle}}</p>
				<div class="numBox">
					<p class="goldNum">
						{{detailData.goldNum}}
						<span>金币</span>
					</p>
					<p class="actionBox">
						<span class="btn">-</span>
						<input type="text" value="" />
						<span class="btn">+</span>
					</p>
				</div>
				<p class="sub">库存：{{quantity}}</p>
			</div>
		</scroll-view>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	import {exchangeGoodsDetail} from '@/request/findApi.js';
	import { APPCONFIG } from '@/config/APPCONFIG.js';
	export default {
		components: {
			navBar
		},
		computed: {
			mainImg () {
				return (img)=> {
					return APPCONFIG.apiRoot + img
				}
			},
			quantity () {
				let num = 0;
				this.detailData && this.detailData.itemList.map(item => {
					num += item.quantity;
				});
				return num;
			}
		},
		data() {
			return {
				id: '',
				detailData: ''
			};
		},
		onLoad(options) {
			this.id = options.id;
			this.exchangeGoodsDetail();
		},
		methods: {
			exchangeGoodsDetail () {
				let params = {
					id: this.id
				}
				exchangeGoodsDetail(params).then(res => {
					this.detailData = res.data;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.imgBox{
	img{
		display: block;
		width: 100%;
	}
}
</style>
