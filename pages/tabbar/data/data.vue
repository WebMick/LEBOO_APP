<template>
	<view class="page tabPage data">
		<navBar :hasBack="false">
			<template #left>
				<view>left</view>
			</template>
		</navBar>
		<tabNav :options="tabOptions" @changeTabs="changeTabs"></tabNav>
		<div class="content"></div>
	</view>
</template>

<script>
	import navBar from '@/components/navBar/navBar.vue';
	import tabNav from '@/components/tabNav/tabNav.vue';
	export default {
		components: {
			navBar,
			tabNav
		},
		data() {
			return {
				tabOptions: [
					{ name: '日数据', id: 0},
					{ name: '周数据', id: 1},
					{ name: '月数据', id: 2},
				]
			};
		},
		methods: {
			changeTabs (active) {
				console.log(active)
			}
		}
	}
</script>

<style lang="scss">

</style>
