import { FC } from "react";

interface ContainerProps {
    component?: string;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "xxl";
    fixed?: boolean;
    className?: string;
}

export const Container: FC<ContainerProps>;