import { FC } from "react";

interface CircularProgressProps {
    size?: number;
    value?: number;
    thickness?: number;
    variant?: "determinate" | "indeterminate";
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    className?: string;
}

export const CircularProgress: FC<CircularProgressProps>;