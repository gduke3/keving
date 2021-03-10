import type { Schema } from "@core/types";

const layout: Layout = {
	isHeaderGrabbed: {
		value: false,
		set: function (value) {
			this.value = value;
		},
	},
	breadCrumbs: {
		value: [],
		set: function (value) {
			this.value = value;
		},
	},
};

export { layout };
export type Layout = Schema.Store<{
	isHeaderGrabbed: boolean;
	breadCrumbs: {
		to: string;
		name: string;
	}[];
}>;
