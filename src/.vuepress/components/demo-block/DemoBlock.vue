<template>
	<div class="example">
		<div class="example-case">
			<slot name="source"></slot>
		</div>
		<div class="example-code">
			<div class="highlight" ref="">
				<slot name="highlight"></slot>
			</div>
			<div class="example-code-more" @click="changeCode">
				<el-icon v-show="!showCode">
					<ArrowDown />
				</el-icon>
				<el-icon v-show="showCode">
					<ArrowUp />
				</el-icon>
				<span>{{showCode?'隐藏':'显示'}}代码</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick } from 'vue'
let showCode = ref(false)
const lsHeight = ref(0)
const ready = ref(false)
const codeHeight = computed(() => {
	let style = {
		height: `${this.lsHeight}px`
	}
	return style
})
const highlightRef = ref(null)
onMounted(() => {
	nextTick(() => {
		if (showCode) {
			highlightRef.style.height = 'auto'
		} else {
			highlightRef.style.height = 0
		}
	})
})
const changeCode = () => {
	showCode.value = !showCode.value
	if (showCode.value) {
		highlightRef.style.height = 'auto'
	} else {
		highlightRef.style.height = 0
	}
}
</script>

<style lang="scss" scoped>
.example {
	border: 1px solid #eee;
	border-radius: 6px;
	margin-bottom: 20px;
	transition: all 0.2s ease-in-out;
	.example-case {
		padding: 10px;
	}

	.example-code {
		.highlight {
			padding: 10px;
			overflow: hidden;
		}
		.example-code-more {
			color: #409eff;
			background-color: #f9fafc;
			height: 44px;
			line-height: 44px;
			font-size: 14px;
			border-top: 1px solid #eee;
			text-align: center;
			cursor: pointer;
		}
	}
}
</style>