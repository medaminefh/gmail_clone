<template>
	<div id="nav">
		<div>
			<img src="~/assets/Logo.svg" alt="logo" width="40" />
			<LinkCompo to="/" :class="curr == '' ? 'primary' : 'normal'">
				<img src="~/assets/inbox.svg" width="18" alt="inbox icon" />
				<span>Inbox({{ mails.length }})</span>
			</LinkCompo>

			<LinkCompo
				to="/archive"
				:class="curr == 'archive' ? 'primary' : 'normal'"
			>
				<img src="~/assets/archive.svg" width="18" alt="archive icon" />
				<span>Archive({{ archive.length }})</span>
			</LinkCompo>
		</div>
		<LinkCompo to="#">
			<img src="~/assets/logout.svg" width="18" alt="Logout icon" />
			<span>Logout</span>
		</LinkCompo>
	</div>
</template>
<script setup>
import { useMailsStore } from "../store/mails";
import { storeToRefs } from "pinia";

const store = useMailsStore();
const { archive, mails } = storeToRefs(store);
const route = useRoute();
const curr = ref("");

watch(
	() => route.fullPath,
	(newValue) => {
		if (newValue) {
			curr.value = newValue.replace("/", "");
		}
	}
);
</script>
<style scoped>
a {
	text-decoration: none;
}
#nav {
	width: 15%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-right: 1px solid #e5e7eb;
}

#nav div {
	display: flex;
	flex-direction: column;
	padding: 20px 0;
	height: 100px;
	width: 80%;
	justify-content: space-around;
}

.primary {
	background-color: #e5e7eb;
	color: #121829;
	padding: 5px 10px;
	border-radius: 10px;
	width: 100%;
	font-weight: bold;
}

.normal {
	background-color: transparent;
	padding: 5px 10px;
	width: 100%;
}
</style>
