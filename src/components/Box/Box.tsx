import React from "react";
import { BoxProps } from "./types";
import { BoxStyle } from "./styles";

const Box = ({children}:BoxProps) => {
    return (
        <BoxStyle>
            {children}
        </BoxStyle>
    )
}

export default Box;