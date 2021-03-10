import { transparentize } from "polished";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
	colors: {
		background: {
			primary: "#F3F5F9",
			secondary: "#fdfdfd",
		},
		common: {
			primary: "#2648f1",
			intense: "#3f4a56",
			green: "#53d769",
			grey: "#8D97A1",
			red: "#f73d34",
			orange: "#fdb549",
			yellow: "#ffe243",
			white: "white",
		},
		complex: {
			border: transparentize(0.9, "#8D97A1"),
		},
	},
	sizes: {
		html: {
			font: "10px",
		},
		common: {
			borderRadius: ".3rem",
			fontSizePrimary: "1.3rem",
			fontSizeSecondary: "1.2rem",
		},
	},
};
