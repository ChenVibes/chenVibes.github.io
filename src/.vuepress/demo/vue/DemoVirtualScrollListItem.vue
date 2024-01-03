<template>
	<p :key="props.uniqueKey">{{props.source.value}} {{props.source.label}}</p>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
	source: Object,
	uniqueKey: [Number, String]
})
</script>