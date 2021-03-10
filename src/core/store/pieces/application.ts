import type { Schema } from "@core/types";
import type { ProfileModel, ImageModel } from "@core/models";

const application: Application = {
	notifications: {
		value: [],
		set: function (value) {
			this.value = value;
		},
	},
	userProfile: {
		value: null,
		set: function (value) {
			this.value = value;
		},
	},
};

export { application };
export type Application = Schema.Store<{
	notifications: {
		id: number;
		type: "success" | "warning" | "error";
		message: string;
		timeout: ReturnType<typeof setTimeout> | null;
	}[];
	userProfile: (ProfileModel & { avatar: ImageModel | null }) | null;
}>;
