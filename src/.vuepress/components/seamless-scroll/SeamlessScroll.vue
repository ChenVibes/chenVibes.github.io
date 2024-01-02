<template>
	<div ref="wrap" class="seamless-scroll">
		<div :style="leftSwitch" v-if="navigation" :class="leftSwitchClass" @click="leftSwitchClick">
			<slot name="left-switch"></slot>
		</div>
		<div :style="rightSwitch" v-if="navigation" :class="rightSwitchClass" @click="rightSwitchClick">
			<slot name="right-switch"></slot>
		</div>
		<div ref="realBox" :style="pos" @mouseenter="enter" @mouseleave="leave" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
			<div ref="slotList" :style="float">
				<slot></slot>
			</div>
			<div v-if="scrollSwitch" v-html="copyHtml" :style="float"></div>
		</div>
	</div>
</template>

<script setup>
import { animationFrame, copyObj, arrayEqual } from './utils'
animationFrame()
import { ref, computed, onMounted, watch, onUnmounted, nextTick } from 'vue'
//events
const emit = defineEmits(['ScrollEnd'])
// data
let xPos = 0
let yPos = 0
let delay = 0
let height = 0
let width = 0 // 外容器宽度
let realBoxWidth = 0 // 内容实际宽度
let slotListHeight = 0
let copyHtml = ref('')
let timer = null
let delayTimer = null
const wrapRef = ref(null)
const realBoxRef = ref(null)
const slotListRef = ref(null)
// props
const props = defineProps({
	data: {
		type: Array,
		default: () => {
			return []
		}
	},
	classOption: {
		type: Object,
		default: () => {
			return {}
		}
	},
	bodyContainer: Function
})
let reqFrame = null // move动画的animationFrame定时器
let singleWaitTime = null // single 单步滚动的定时器
let isHover = false // mouseenter mouseleave 控制this._move()的开关
let ease = 'ease-in'
// computed
const leftSwitchState = computed(() => {
	return xPos < 0
})
const rightSwitchState = computed(() => {
	return Math.abs(xPos) < realBoxWidth - width
})
const leftSwitchClass = computed(() => {
	return leftSwitchState ? '' : options.switchDisabledClass
})
const rightSwitchClass = computed(() => {
	return rightSwitchState ? '' : options.switchDisabledClass
})
const leftSwitch = computed(() => {
	return {
		position: 'absolute',
		margin: `${height / 2}px 0 0 -${options.switchOffset}px`,
		transform: 'translate(-100%,-50%)'
	}
})
const rightSwitch = computed(() => {
	return {
		position: 'absolute',
		margin: `${height / 2}px 0 0 ${width + options.switchOffset}px`,
		transform: 'translateY(-50%)'
	}
})
const float = computed(() => {
	return isHorizontal
		? { float: 'left', overflow: 'hidden' }
		: { overflow: 'hidden' }
})
const pos = computed(() => {
	return {
		transform: `translate(${xPos}px,${yPos}px)`,
		transition: `all ${ease} ${delay}ms`,
		overflow: 'hidden'
	}
})
const defaultOption = computed(() => {
	return {
		step: 1, //步长
		limitMoveNum: 5, //启动无缝滚动最小数据数
		hoverStop: true, //是否启用鼠标hover控制
		direction: 1, // 0 往下 1 往上 2向左 3向右
		openTouch: true, //开启移动端touch
		singleHeight: 0, //单条数据高度有值hoverStop关闭
		singleWidth: 0, //单条数据宽度有值hoverStop关闭
		waitTime: 1000, //单步停止等待时间
		switchOffset: 30,
		autoPlay: true,
		navigation: false,
		switchSingleStep: 134,
		switchDelay: 400,
		switchDisabledClass: 'disabled',
		isSingleRemUnit: false // singleWidth/singleHeight 是否开启rem度量
	}
})
const options = computed(() => {
	return copyObj({}, defaultOption, classOption)
})
const navigation = computed(() => {
	return options.navigation
})
const autoPlay = () => {
	if (navigation) return false
	return options.autoPlay
}
const scrollSwitch = computed(() => {
	if (!isHorizontal) {
		return isVerticalScroll()
	}
	return props.data.length >= options.limitMoveNum
})
const hoverStopSwitch = computed(() => {
	return options.hoverStop && autoPlay && scrollSwitch
})
const canTouchScroll = computed(() => {
	return options.openTouch
})
const isHorizontal = computed(() => {
	return options.direction > 1
})
const baseFontSize = computed(() => {
	if (options.isSingleRemUnit) {
		return parseInt(
			window.getComputedStyle(document.documentElement, null).fontSize
		)
	}
	return 1
})
const realSingleStopWidth = computed(() => {
	return options.singleWidth * baseFontSize
})
const realSingleStopHeight = computed(() => {
	return options.singleHeight * baseFontSize
})
const step = computed(() => {
	let singleStep
	let step = options.step
	if (isHorizontal) {
		singleStep = realSingleStopWidth
	} else {
		singleStep = realSingleStopHeight
	}
	if (singleStep > 0 && singleStep % step > 0) {
		console.error(
			'如果设置了单步滚动,step需是单步大小的约数,否则无法保证单步滚动结束的位置是否准确。~~~~~'
		)
	}
	return step
})

// methods
const reset = () => {
	_cancle()
	_initMove()
}
const leftSwitchClick = () => {
	if (!leftSwitchState) return
	// 小于单步距离
	if (Math.abs(xPos) < options.switchSingleStep) {
		xPos = 0
		return
	}
	xPos += options.switchSingleStep
}
const rightSwitchClick = () => {
	if (!rightSwitchState) return
	// 小于单步距离
	if (realBoxWidth - width + xPos < options.switchSingleStep) {
		xPos = width - realBoxWidth
		return
	}
	xPos -= options.switchSingleStep
}
const _cancle = () => {
	cancelAnimationFrame(reqFrame || '')
}
const touchStart = e => {
	if (!canTouchScroll) return
	const touch = e.targetTouches[0] //touches数组对象获得屏幕上所有的touch，取第一个touch
	const { waitTime, singleHeight, singleWidth } = options
	startPos = {
		x: touch.pageX,
		y: touch.pageY
	} //取第一个touch的坐标值
	startPosY = yPos //记录touchStart时候的posY
	startPosX = xPos //记录touchStart时候的posX
	if (!!singleHeight && !!singleWidth) {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			_cancle()
		}, waitTime + 20)
	} else {
		_cancle()
	}
}
const touchMove = e => {
	//当屏幕有多个touch或者页面被缩放过，就不执行move操作
	if (
		!canTouchScroll ||
		e.targetTouches.length > 1 ||
		(e.scale && e.scale !== 1)
	)
		return
	const touch = e.targetTouches[0]
	const { direction } = options
	endPos = {
		x: touch.pageX - startPos.x,
		y: touch.pageY - startPos.y
	}
	event.preventDefault() //阻止触摸事件的默认行为，即阻止滚屏
	const dir = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1 : 0 //dir，1表示纵向滑动，0为横向滑动
	if (dir === 1 && direction < 2) {
		// 表示纵向滑动 && 运动方向为上下
		yPos = startPosY + endPos.y
	} else if (dir === 0 && direction > 1) {
		// 为横向滑动 && 运动方向为左右
		xPos = startPosX + endPos.x
	}
}
const touchEnd = () => {
	if (!canTouchScroll) return
	const direction = options.direction
	delay = 50
	if (direction === 1) {
		if (yPos > 0) yPos = 0
	} else if (direction === 0) {
		let h = (realBoxHeight / 2) * -1
		if (yPos < h) yPos = h
	} else if (direction === 2) {
		if (xPos > 0) xPos = 0
	} else if (direction === 3) {
		let w = realBoxWidth * -1
		if (xPos < w) xPos = w
	}
	if (timer) clearTimeout(timer)
	timer = setTimeout(() => {
		delay = 0
		_move()
	}, delay)
}
const enter = () => {
	if (hoverStopSwitch) _stopMove()
}
const leave = () => {
	if (hoverStopSwitch) _startMove()
}
const _move = () => {
	// 鼠标移入时拦截_move()
	if (isHover) return
	_cancle() //进入move立即先清除动画 防止频繁touchMove导致多动画同时进行
	reqFrame = requestAnimationFrame(
		function () {
			const h = realBoxHeight / 2 //实际高度
			const w = realBoxWidth / 2 //宽度
			let { direction, waitTime } = options
			let { step } = this
			if (direction === 1) {
				// 上
				if (Math.abs(yPos) >= h) {
					emit('ScrollEnd')
					yPos = 0
				}
				yPos -= step
			} else if (direction === 0) {
				// 下
				if (yPos >= 0) {
					emit('ScrollEnd')
					yPos = h * -1
				}
				yPos += step
			} else if (direction === 2) {
				// 左
				if (Math.abs(xPos) >= w) {
					emit('ScrollEnd')
					xPos = 0
				}
				xPos -= step
			} else if (direction === 3) {
				// 右
				if (xPos >= 0) {
					emit('ScrollEnd')
					xPos = w * -1
				}
				xPos += step
			}
			if (singleWaitTime) clearTimeout(singleWaitTime)
			if (realSingleStopHeight) {
				//是否启动了单行暂停配置
				if (Math.abs(yPos) % realSingleStopHeight < step) {
					// 符合条件暂停waitTime
					singleWaitTime = setTimeout(() => {
						_move()
					}, waitTime)
				} else {
					_move()
				}
			} else if (realSingleStopWidth) {
				if (Math.abs(xPos) % realSingleStopWidth < step) {
					// 符合条件暂停waitTime
					singleWaitTime = setTimeout(() => {
						_move()
					}, waitTime)
				} else {
					_move()
				}
			} else {
				_move()
			}
		}.bind(this)
	)
}
const _initMove = () => {
	nextTick(() => {
		const { switchDelay } = options
		_dataWarm(props.data)
		copyHtml = '' //清空copy
		if (isHorizontal) {
			height = wrapRef?.offsetHeight
			width = wrapRef?.offsetWidth
			let slotListWidth = slotListRef?.offsetWidth
			// 水平滚动设置warp width
			if (autoPlay) {
				// 修正offsetWidth四舍五入
				slotListWidth = slotListWidth * 2 + 1
			}
			realBoxRef.style.width = slotListWidth + 'px'
			realBoxWidth = slotListWidth
		} else {
			height = wrapRef?.offsetHeight
			let slotListHeight = slotListRef?.offsetHeight
			slotListHeight = slotListHeight
		}

		if (autoPlay) {
			ease = 'ease-in'
			delay = 0
		} else {
			ease = 'linear'
			delay = switchDelay
			return
		}

		// 是否可以滚动判断
		if (scrollSwitch) {
			if (timer) clearTimeout(timer)
			copyHtml = slotListRef ? slotListRef.innerHTML : ''
			timer = setTimeout(() => {
				realBoxHeight = realBoxRef?.offsetHeight
				_move()
			}, 0)
		} else {
			_cancle()
			yPos = xPos = 0
		}
	})
}
const _dataWarm = data => {
	if (data.length > 100) {
		console.warn(
			`数据达到了${data.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`
		)
	}
}
const _startMove = () => {
	isHover = false //开启_move
	_move()
}
const _stopMove = () => {
	isHover = true //关闭_move
	// 防止频频hover进出单步滚动,导致定时器乱掉
	if (singleWaitTime) clearTimeout(singleWaitTime)
	_cancle()
}
// 往上是否可以滚动判断
const isVerticalScroll = () => {
	if (slotListHeight < height) {
		_cancle()
		yPos = xPos = 0
		return false
	}
	return true
}
const cancel = () => {
	_cancle()
	clearTimeout(singleWaitTime)
}

onMounted(() => {
	_initMove()
	window.onresize = () => {
		reset()
	}
})
watch(
	() => data,
	newVal => {
		_dataWarm(newData)
		//监听data是否有变更
		if (!arrayEqual(newVal, data)) {
			delayTimer && clearTimeout(delayTimer)
			delayTimer = setTimeout(() => {
				reset()
			}, 1000 * 10)
		}
	}
)
watch(
	() => autoPlay,
	bol => {
		if (bol) {
			reset()
		} else {
			_stopMove()
		}
	}
)
onUnmounted(() => {
	cancel()
})
</script>