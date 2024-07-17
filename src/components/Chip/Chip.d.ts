import { FC } from "react";

interface ChipProps {
    label: string;
    variant?: "filled" | "outlined" | "ghost";
    color?: "blue" | "green" | "red" | "indigo" | "purple" | "pink" | "black";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    onDelete?: () => void;
    className?: string;
}

export const Chip: FC<ChipProps>;