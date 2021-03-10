import React from "react";

import { PortfolioCarousel } from "@containers/PortfolioCarousel";

import * as S from "./styled";

const Layout = () => {
	return (
		<S.Layout>
			<PortfolioCarousel works={["keving", "cosmo preroll", "thanos"]} />
		</S.Layout>
	);
};

export { Layout };
