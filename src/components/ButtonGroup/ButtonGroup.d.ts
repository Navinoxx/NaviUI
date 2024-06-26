import { FC } from "react";

export interface ButtonGroupProps {
    direction?: "row" | "column";
    space?: boolean;
    rounded?: boolean;
}

export const ButtonGroup: FC<ButtonGroupProps>;
