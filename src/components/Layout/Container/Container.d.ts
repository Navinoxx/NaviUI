import { FC, ReactNode } from "react";

interface ContainerProps {
    component?: string;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "xxl";
    fixed?: boolean;
    className?: string;
    children?: ReactNode;
}

export const Container: FC<ContainerProps>;