<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: '30'
			});
			uni.showTabBarRedDot({
				index: 3
			});
		}, 1000);
		this.setFirstPage();
	},
	onShow: function() {
		console.log('App Show');
		
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		// 判断是否登录过
		setFirstPage () {
			let token = uni.getStorageSync('token');
			if(token){
				uni.switchTab({
					url: 'pages/tabbar/home/home'
				})
			}else{
				uni.navigateTo({
					url: './pages/login/index'
				})
			}
		}
	}
};
</script>

<style lang="scss">
/*每个页面公共css */ 
body{
	background: $uni-bg-color;
	a{
		text-decoration: none;
	}
}
</style>
