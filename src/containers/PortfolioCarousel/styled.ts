import { Rotate } from "@components/simple/Rotate/styled";
import { Heading } from "@components/simple/Heading/styled";
import styled from "styled-components";

export const PortfolioCarousel = styled(Rotate)`
	height: 100%;
	width: 100%;
`;

export const Carousel = styled.div`
	white-space: nowrap;

	${Heading} {
		display: inline-block;
		width: 50vw;
		overflow: hidden;
		text-align: center;
	}
`;
