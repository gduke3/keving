import React, { memo } from "react";

import * as S from "./styled";

const Heading = memo(
	({ children, color = "pink", fontStyle = "italic", ...rest }: Props) => {
		return (
			<S.Heading $color={color} $fontStyle={fontStyle} {...(rest as any)}>
				{children}
			</S.Heading>
		);
	}
);

export { Heading };
export interface Props extends React.ComponentProps<"p"> {
	color?: S.ColorKind;
	fontStyle?: S.FontStyleKind;
}
