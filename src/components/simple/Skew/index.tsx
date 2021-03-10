import React, { memo } from "react";

import * as S from "./styled";

const Skew = memo(({ children, ...rest }: Props) => {
	return <S.Skew {...(rest as any)}>{children}</S.Skew>;
});

export { Skew };
export interface Props extends React.ComponentProps<"div"> {}
