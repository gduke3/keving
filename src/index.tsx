import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@core/store";
import { ThemeProvider } from "styled-components";
import { BodyStyles, FontStyles } from "@styles";
import { theme } from "@core/theme";

import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("app");

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<ThemeProvider theme={theme}>
				<BodyStyles />
				<FontStyles />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</StoreProvider>
	</React.StrictMode>,
	rootElement
);

reportWebVitals();
