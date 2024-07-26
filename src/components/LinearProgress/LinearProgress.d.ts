import { FC } from "react";

interface LinearProgressProps {
    value?: number;
    thickness?: number;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    variant?: "determinate" | "indeterminate";
    className?: string;
}

export const LinearProgress: FC<LinearProgressProps>;