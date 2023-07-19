<template>
	<h2>Inbox</h2>
	<div class="top">
		<div class="selectAll">
			<input id="selectAll" type="checkbox" v-model="selectAll" />
			<label for="selectAll">Select all</label>
		</div>
		<div class="hidden" v-show="selected.length > 0">
			<p @click="readSelected">
				<img src="~/assets/envelop.svg" width="15" alt="envelop" /><span
					>Mark as read (r)</span
				>
			</p>
			<p @click="archiveSelected">
				<img src="~/assets/bin.svg" width="15" alt="envelop" /><span
					>Archive (a)
				</span>
			</p>
		</div>
	</div>
	<MainContent :selectAll="selectAll" />
</template>
<script setup>
import { useMailsStore } from "../store/mails";
import { storeToRefs } from "pinia";

const store = useMailsStore();
const { selected } = storeToRefs(store);
const selectAll = ref(false);

const readSelected = () => store.readSelected();
const archiveSelected = () => store.archiveSelected();

watch(
	() => selectAll.value,
	(_) => {
		store.selectAll();
	}
);
</script>

<style scoped>
* {
	font-weight: bold;
}

.top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
}
.hidden {
	width: 250px;
	display: flex;
	justify-content: space-between;
}

.hidden p {
	cursor: pointer;
}
</style>
