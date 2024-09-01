import { FC } from "react";

export interface ButtonGroupProps {
    variant?: "solid" | "outlined" | "ghost";
    size?: "sm" | "md" | "lg";
    color?: "blue" | "green" | "red" | "indigo" | "purple" | "pink" | "black";
    direction?: "row" | "column" | "reverseRow" | "reverseColumn";
    rounded?: boolean;
    children?: React.ReactNode;
    className?: string;
}

export const ButtonGroup: FC<ButtonGroupProps>;
