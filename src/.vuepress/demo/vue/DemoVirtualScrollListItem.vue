<template>
	<p :key="props.value">{{props.label}}</p>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
	label: String,
	value: Number
})
</script>

<style lang="scss" scoped>
</style>