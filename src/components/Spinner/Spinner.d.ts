import { FC } from "react";

interface SpinnerProps {
    variant?: "regular" | "double" | "edge" | "dashed";
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const Typography: FC<SpinnerProps>;