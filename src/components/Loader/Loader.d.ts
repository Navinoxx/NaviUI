import { FC, ReactNode } from "react";

interface LoaderProps {
    animation?: "bounce" | "pulse" | "ping" | "fade" | "scale" | "flip";
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const Loader: FC<LoaderProps>;