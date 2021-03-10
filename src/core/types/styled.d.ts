import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		fonts: {
			primary: string;
		};
		colors: {
			background: {
				primary: string;
				secondary: string;
			};
			common: {
				primary: string;
				intense: string;
				grey: string;
				green: string;
				red: string;
				pink: string;
				orange: string;
				yellow: string;
				white: string;
			};
			complex: {
				border: string;
			};
		};
		sizes: {
			html: {
				font: string;
			};
			common: {
				borderRadius: string;
				fontSizePrimary: string;
				fontSizeSecondary: string;
			};
		};
	}
}
