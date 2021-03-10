import type { Schema } from "@core/types";

const counters: Counters = {
	layoutOverflowSubscribers: {
		value: 0,
		set: function (value) {
			this.value = value;
		},
	},
};

export { counters };
export type Counters = Schema.Store<{
	layoutOverflowSubscribers: number;
}>;
