import React, { memo } from "react";

import * as S from "./styled";

const Rotate = memo(({ children, ...rest }: Props) => {
	return <S.Rotate>{children}</S.Rotate>;
});

export { Rotate };
export interface Props extends React.ComponentProps<"div"> {}
