import { defineStore } from "pinia";
import mails from "../utils/data.json";

export const useMailsStore = defineStore("mails", {
	state: () => ({
		mails,
		archive: [] as typeof mails,
		selected: [] as number[],
		curr: "",
	}),
	actions: {
		selectAll() {
			const areSelectedAll = this.selected.length == this.mails.length;
			if (!areSelectedAll) this.selected = mails.map((mail) => mail.id);
			else this.selected = [];
		},
		select(id: number) {
			const mail = this.mails.find((m) => m.id == id) ?? null;
			this.curr = mail;
			if (mail) {
				const isAlreadySelected = this.selected.find((i) => i == id)
					? true
					: false;
				console.log({ mail, isAlreadySelected });
				if (!isAlreadySelected) this.selected = [...this.selected, id];
				else this.selected = this.selected.filter((a) => a != id);
			}
		},
		readSelected() {
			this.mails = this.mails.map((mail) =>
				this.selected.includes(mail.id) ? { ...mail, isRead: true } : mail
			);
		},
		read() {
			// make it read
			if (this.curr && this.curr?.id)
				this.mails = this.mails.map((m) =>
					m.id == this.curr.id ? { ...m, isRead: true } : m
				);
		},
		archiveSelected() {
			// update archive
			this.archive = this.mails.filter((mail) =>
				this.selected.includes(mail.id)
			);

			// update mails
			this.mails = this.mails.filter(
				(mail) => !this.selected.includes(mail.id)
			);

			// update selected
			this.selected = [];
		},
		archiveIt() {
			// filter the mails
			this.mails = this.mails.filter((mail) => mail.id != this.curr.id);

			// add that file to archive
			this.archive = [...this.archive, this.curr];
		},
	},
});
