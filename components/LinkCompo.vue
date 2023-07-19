<template>
	<NuxtLink :to="to" :class="class">
		<span>
			<slot></slot>
		</span>
	</NuxtLink>
</template>

<script setup>
defineProps({
	to: String,
	class: String,
	title: String,
	src: String,
});
</script>
<style scoped>
span {
	display: flex;
	gap: 5px;
	color: #4b5563;
}
</style>
