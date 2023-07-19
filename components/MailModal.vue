<template>
	<div :class="[isOpen ? 'open' : '', 'modal']" @click="closeModal">
		<div @click.stop>
			<div class="header">
				<p @click="closeModal"><span>X</span> <span>Close(Esc)</span></p>
				<div>
					<p @click="read">
						<img src="~/assets/envelop.svg" width="15" alt="envelop" /><span
							>Mark as read (r)</span
						>
					</p>
					<p @click="archiveIt">
						<img src="~/assets/bin.svg" width="15" alt="bin" /><span
							>Archive (a)</span
						>
					</p>
				</div>
			</div>
			<div class="main">
				<h2>{{ curr ? curr.email : "Inbox" }}</h2>
				<p>
					{{ curr?.cont }}
				</p>
			</div>
		</div>
	</div>
</template>
<script setup>
defineProps({
	cont: String,
});

import { useModalStore } from "../store/modal";
import { useMailsStore } from "../store/mails";

import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const mailStore = useMailsStore();
const { isOpen } = storeToRefs(modalStore);
const { curr } = storeToRefs(mailStore);

const closeModal = () => {
	modalStore.close();
	console.log("clicked outside");
};

const read = () => {
	mailStore.read();
};
const archiveIt = () => {
	mailStore.archiveIt();
};
</script>
<style scoped>
.modal {
	position: absolute;
	width: 0%;
	height: 100%;
	background-color: #6360607c;
	top: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	transition: 0.3s ease-in;
}

.modal.open {
	width: 100%;
	height: 100%;
}

.modal > div {
	position: absolute;
	padding: 20px;
	background-color: #fff;
	width: 40%;
	height: 100%;
	top: 0;
	right: 0;
	bottom: 0;
}

.modal div .main {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.modal div .header {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.header p {
	cursor: pointer;
}

.header > div {
	display: flex;
	gap: 15px;
}
</style>
