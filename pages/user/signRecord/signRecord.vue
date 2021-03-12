<template>
	<view class="page">
		<navBar title="签到记录"></navBar>
		<div class="content">
			<div class="calendar">
				<uni-calendar
				    :insert="true"
				    :lunar="false" 
				    :start-date="'2019-3-2'"
				    :end-date="'2019-5-20'"
					:showMonth="false"
					:selected="selected"
					@monthSwitch="changeMonth"
				     ></uni-calendar>
			</div>
			<div class="textList mt20">
				<div class="item">
					<span >累计签到</span>
					<p>
						{{signInCount}}<span>天</span>
					</p>
				</div>
				<div class="item">
					<span>本月签到</span>
					<p>
						{{signInDays}}<span>天</span>
					</p>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue';
	import {signRecord} from '@/request/userApi.js';
	import {dateFormat} from '@/utils/utils.js';
	export default {
		components: {
			navBar,
			uniCalendar
		},
		data() {
			return {
				yearMonth: '2021-01',
				selected: [], // 选中日期
				signInCount: '', //累计签到
				signInDays: '', //本月签到
			};
		},
		created() {
			this.signRecord();
		},
		methods: {
			signRecord () {
				this.selected = [];
				let param = {
					yearMonth: this.yearMonth
				}
				signRecord(param).then(res => {
					let {code, data} = res;
					this.signInCount = data.signInCount;
					this.signInDays  = data.signInDays;
					if(code == 0){
						if(data.data && data.data.length > 0) {
							data.data.map((item) => {
								let date = {
									date: dateFormat(item.createTime, 'y-M-d')
								}
								this.selected.push(date);
							})
						}
					}
				})
			},
			changeMonth(e){
				let {month, year} = e;
				month = month > 9 ? month : '0' + month;
				this.yearMonth = year + '-' + month;
				this.signRecord();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.calendar{
		padding: 0 40rpx;
		background-color: #fff;
	}
	.textList{
		.item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 25rpx 45rpx;
			background: $uni-bg-color-box;
			font-size: 28rpx;
			p{
				span{
					font-size: 24rpx;
					color: #999;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
