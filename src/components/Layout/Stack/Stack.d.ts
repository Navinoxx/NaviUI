import { FC, ReactNode } from "react";

interface StackProps {
    direction?: "row" | "column" | "reverseRow" | "reverseColumn";
    justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
    alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
    spacing?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    className?: string;
    children?: ReactNode;
}

export const Stack: FC<StackProps>;