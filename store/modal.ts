import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
	state: () => ({
		isOpen: false,
	}),
	actions: {
		open() {
			this.isOpen = true;
		},
		close(id: number) {
			this.isOpen = false;
		},
	},
});
