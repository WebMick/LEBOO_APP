<template>
	<view class="tabNav">
		<p class="item" 
			v-for="item in options" 
			:class="{act: activeTabs == item.id}"
			@click="changeTabs(item)">
			{{item.name}}
		</p>
	</view>
</template>

<script>
	export default {
		props: {
			defaultActive: {
				default: null,
				type: Number
			},
			options: {
				default: () => {},
				type: Array
			}
		},
		data() {
			return {
				activeTabs: 0
			};
		},
		created () {
			this.activeTabs = this.defaultActive || 0;
		},
		methods: {
			changeTabs (item) {
				if(item.id != this.activeTabs){
					this.activeTabs = item.id;
					this.$emit('changeTabs', this.activeTabs);
				}
			}
		}
	}
</script>

<style lang="scss">
	.tabNav{
		display: flex;
		background-color: #fff;
		.item{
			flex: 1;
			height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #999;
			font-size: 15px;
			&.act{
				color: #000;
			}
		}
	}
</style>
