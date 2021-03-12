<template>
	<div class="bannerBox">
		<div class="item morning" v-if="type == 0">
			<div class="sun"></div>
			<div class="stars">
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
			</div>
		</div>
		<div class="item noon" v-if="type == 1">
			<div class="sun"></div>
			<div class="clound">
				<div class="cloundItem"></div>
				<div class="cloundItem"></div>
				<div class="cloundItem"></div>
				<div class="cloundItem"></div>
				<div class="cloundItem"></div>
			</div>
		</div>
		<div class="item night" v-if="type == 2">
			<div class="moon"></div>
			<div class="meteor">
				<div class="meteorItem"></div>
				<div class="meteorItem"></div>
				<div class="meteorItem"></div>
			</div>
			<div class="stars">
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
				<div class="starsItem"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				type: 0
			}
		},
		created () {
			this.setBanner();
		},
		methods: {
			setBanner () {
				let hours = new Date().getHours();
				if(hours >= 0 && hours < 8){
					this.type = 0;
				}
				else if(hours >= 8 && hours < 16){
					this.type = 1;
				}else{
					this.type = 2;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	$url:'../../../../static/img/home/banner/';
	.bannerBox{
		height: 455rpx;
		.item{
			position: relative;
			height: 100%;
			overflow: hidden;
			.sun{
				position: absolute;
				right: 26rpx;
				top: 0;
				width: 249rpx;
				height: 249rpx;
				&:before,&:after{
					content: '';
					position: absolute;
				}
				&:after{
					width: 100%;
					height: 100%;
					left: 0;
					top: 0;
					background: url($url + 'sunBg.png') no-repeat;
					background-size: 100% 100%;
					animation: sunBgAni 2s infinite;
				}
				&:before{
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					width: 32rpx;
					height: 32rpx;
					background: #fff;
					border-radius: 50%;
					opacity: .9;
				}
			}
			.stars{
				.starsItem{
					position: absolute;
					width: 2rpx;
					height: 2rpx;
					border-radius: 50%;
					background: #fff;
					animation: starsAni 2s linear infinite;
					&:nth-child(1){ left: 127rpx; top: 37rpx; opacity: .6; animation-delay: 0s; }
					&:nth-child(2){ left: 314rpx; top: 15rpx; opacity: .3; animation-delay: 1s; }
					&:nth-child(3){ left: 434rpx; top: 35rpx; opacity: .8; width: 3rpx; height: 3rpx; animation-delay: 2s; }
					&:nth-child(4){ left: 552rpx; top: 70rpx; opacity: .6; width: 4rpx; height: 4rpx; animation-delay: .5s; }
					&:nth-child(5){ left: 687rpx; top: 53rpx; width: 4rpx; height: 4rpx; animation-delay: 2s; }
					&:nth-child(6){ left: 48rpx; top: 116rpx; opacity: .5; animation-delay: 3s; }
					&:nth-child(7){ left: 204rpx; top: 109rpx; opacity: .4; animation-delay: 1.3s; }
					&:nth-child(8){ left: 278rpx; top: 87rpx; width: 4rpx; height: 4rpx; animation-delay: 1.9s; }
					&:nth-child(9){ left: 409rpx; top: 113rpx; width: 4rpx; height: 4rpx; animation-delay: .8s; }
					&:nth-child(10){ left: 619rpx; top: 100rpx; opacity: .5; animation-delay: 2s; }
					&:nth-child(11){ left: 180rpx; top: 166rpx; animation-delay: .5s; }
					&:nth-child(12){ left: 321rpx; top: 164rpx; width: 4rpx; height: 4rpx; animation-delay: 1.8s; }
					&:nth-child(13){ left: 536rpx; top: 168rpx; width: 4rpx; height: 4rpx; opacity: .6; animation-delay: 1.2s; }
					&:nth-child(14){ left: 637rpx; top: 180rpx; width: 4rpx; height: 4rpx; animation-delay: 2.8s; }
					
				}
			}
			&.morning{
				background: url($url + 'morningBg.jpg') no-repeat;
				background-size: 100% 100%;
				
			}
			&.noon{
				background: url($url + 'noonBg.jpg') no-repeat;
				background-size: 100% 100%;
				.sun{
					width: 208rpx;
					height: 208rpx;
				}
				.clound{
					.cloundItem{
						position: absolute;
						left: 0;
						animation: cloundAni 15s linear infinite both;
						&:nth-child(1){ 
							width: 94rpx; height: 42rpx; top: 126rpx; background: url($url + 'clound01.png') no-repeat; background-size: 100% 100%; 
							animation-delay: 8s;
						}
						&:nth-child(2){	
							width: 99rpx; height: 18rpx; top: 62rpx; background: url($url + 'clound02.png') no-repeat; background-size: 100% 100%;
							animation-delay: 12s;
						}
						&:nth-child(3){ 
							width: 63rpx; height: 30rpx; top: 203rpx; background: url($url + 'clound03.png') no-repeat; background-size: 100% 100%;
							animation-delay: 4s;
						}
						&:nth-child(4){ 
							width: 179rpx; height: 32rpx; top: 154rpx; background: url($url + 'clound04.png') no-repeat; background-size: 100% 100%;
						}
						&:nth-child(5){ 
							width: 99rpx; height: 18rpx; top: 262rpx; background: url($url + 'clound05.png') no-repeat; background-size: 100% 100%;
							animation-delay: 15s;
						}
					}
				}
			}
			&.night{
				background: url($url + 'nightBg.jpg') no-repeat;
				background-size: 100% 100%;
				.moon{
					position: absolute;
					top: 77rpx;
					right: 54rpx;
					width: 101rpx;
					height: 101rpx;
					background: url($url + 'moon.png') no-repeat center;
					background-size: 100% auto;
				}
				.meteor{
					.meteorItem{
						position: absolute;
						background: url($url + 'meteor.png') no-repeat center;
						background-size: 100% auto;
						top: 0;
						left: 0;
						width: 94rpx;
						height: 27rpx;
						animation: meteorAni 6s linear infinite;
						&:nth-child(1){
							width: 132rpx;
							height: 38rpx;
							left: 147rpx;
							top: 46rpx;
						}
						&:nth-child(2){
							left: 291rpx;
							top: 176rpx;
						}
						&:nth-child(3){
							left: 544rpx;
							top: 143rpx;
						}
					}
					
				}
			}
		}
	}
	@keyframes sunBgAni {
		0%,50%,100%{
			opacity: .9;
		}
		25%,75%{
			opacity: .7;
		}
	}
	@keyframes starsAni{
		0%,100%{
			opacity: .9;
			transform: translate(2px, 2px);
		}
		50%{
			opacity: 0;
			transform: translate(0, 0);
		}
	}
	@keyframes cloundAni{
		0%{
			left: 750rpx;
		}
		100%{
			left: -200rpx;
		}
	}
	@keyframes meteorAni{
		0%{
			opacity: .3;
			transform: translate(-400%, -400%);
		}
		40%{
			opacity: 1;
		}
		100%{
			opacity: .3;
			transform: translate(400%, 400%);
		}
	}
</style>
