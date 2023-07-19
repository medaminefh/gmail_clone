<template>
	<div class="mails">
		<div
			v-for="mail in mails"
			:class="[mail.isRead ? 'isRead' : '', 'mail']"
			:key="mail.id"
			@click="select(mail.id)"
		>
			<input
				type="checkbox"
				:checked="selectAll"
				:value="mail.id"
				v-model="selected"
			/>
			<label>{{ mail.cont }}</label>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useMailsStore } from "../store/mails";
import { useModalStore } from "../store/modal";

defineProps({
	selectAll: Boolean,
});

const selected = computed(() => store.selected);

const modalStore = useModalStore();
const store = useMailsStore();
const mails = computed(() => store.mails);
const select = (id: number) => {
	//open the modal
	modalStore.open();
	store.select(id);
};
</script>

<style scoped>
.mails {
	padding-top: 15px;
}
.mails .mail.isRead {
	background-color: #e5e7eb;
}
.mail {
	height: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
}
.mail:hover {
	background-color: #d4d6da67 !important;
}

.mail label {
	cursor: pointer;
}
</style>
