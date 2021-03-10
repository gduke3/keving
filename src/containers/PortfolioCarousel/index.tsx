import React from "react";

import { Heading } from "@components/simple/Heading";
import { Align } from "@components/simple/Align";

import * as S from "./styled";

const PortfolioCarousel = ({ works }: Props) => {
	return (
		<S.PortfolioCarousel>
			<Align axis={["y"]}>
				<S.Carousel>
					{works.map((work, index) => (
						<Heading key={`work-${index}`} color='pink' fontStyle='italic'>
							{work}
						</Heading>
					))}
				</S.Carousel>
			</Align>
		</S.PortfolioCarousel>
	);
};

export { PortfolioCarousel };
export interface Props {
	works: string[];
}
