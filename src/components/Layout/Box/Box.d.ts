import { FC, ReactNode } from "react";

interface BoxProps {
    component?: string;
    className?: string;
    children?: ReactNode;
}

export const Box: FC<BoxProps>;