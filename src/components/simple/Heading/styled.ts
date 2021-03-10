import styled, { DefaultTheme } from "styled-components";

export const Heading = styled.p<HeadingProps>`
	font-weight: 900;
	font-size: 10rem;
	text-transform: uppercase;
	letter-spacing: 0.25rem;
	color: ${(props) => props.theme.colors.common[props.$color]};
	font-style: ${(props) => props.$fontStyle};
`;

export interface HeadingProps {
	$color: ColorKind;
	$fontStyle: FontStyleKind;
}

export type ColorKind = keyof DefaultTheme["colors"]["common"];

export type FontStyleKind = "italic" | "normal";
