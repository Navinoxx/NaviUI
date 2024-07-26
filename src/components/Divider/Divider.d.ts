import { FC } from "react";

interface DividerProps {
    component?: string;
    variant?: "full" | "inset" | "middle";
    orientation?: "vertical" | "horizontal";
    textAlign?: "left" | "center" | "right";
    children?: React.ReactNode;
    className?: string;
}

export const Divider: FC<DividerProps>;