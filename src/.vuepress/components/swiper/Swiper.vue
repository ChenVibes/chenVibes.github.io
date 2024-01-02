<template>
	<div class="marquee-container" ref="marquee" :style="marqueeStyle" @mouseover="stop" @mouseleave="start">
		<!-- 跑马灯内容 -->
		<div class="marquee-item" :style="itemStyle">
			<slot :data="currentItem" :index="currentIndex"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {
			currentIndex: 0, // 当前显示的项索引
			intervalId: null,
			lineHeight: 0,
			animate: false
		}
	},
	props: {
		data: {
			type: Array,
			default() {
				return []
			}
		},
		delay: {
			type: Number,
			default: 2000
		}
	},
	computed: {
		swiperData() {
			return this.data
		},
		currentItem() {
			return this.swiperData[this.currentIndex]
		},
		marqueeStyle() {
			return {
				height: '100%'
			}
		},
		itemStyle() {
			let style = {
				lineHeight: `${this.lineHeight}px`,
				height: `${this.lineHeight}px`
			}
			if (this.animate) {
				Object.assign(style, {
					transition: 'all 0.5s',
					marginTop: `-${this.lineHeight}px`
				})
			}
			return style
		}
	},
	mounted() {
		this.startMarquee()
		this.$nextTick(() => {
			this.lineHeight = this.$refs.marquee.offsetHeight || '100%'
		})
	},
	methods: {
		startMarquee() {
			clearInterval(this.intervalId)
			this.intervalId = setInterval(this.scroll, this.delay) // 每隔两秒切换一次项
		},
		scroll() {
			this.animate = true // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
			setTimeout(() => {
				//  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
				this.currentIndex = (this.currentIndex + 1) % this.swiperData.length
				if (this.currentIndex > this.swiperData.length - 1) {
					this.currentIndex = 0
				}
				this.animate = false // margin-top 为0 的时候取消过渡动画，实现无缝滚动
			}, 500)
		},
		stop() {
			clearInterval(this.intervalId)
		},
		start() {
			this.startMarquee()
		}
	},
	beforeDestroy() {
		clearInterval(this.intervalId)
		this.$refs.marquee.removeEventListener('transitionend', this.startMarquee)
	}
}
</script>

<style lang="less" scoped>
.marquee-container {
	height: 100%; /* 设置容器高度 */
	overflow: hidden; /* 隐藏超出容器的内容 */
	position: relative;
	width: 100%;
}

.marquee-item {
	right: 0;
	position: absolute;
	top: 0;
	text-align: center;
	line-height: 100%; /* 设置项的高度，与容器高度一致 */
}
</style>