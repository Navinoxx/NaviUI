import { FC } from "react";

interface IconButtonProps {
    variant?: "solid" | "shadow" | "outlined" | "ghost";
    color?: "blue" | "green" | "red" | "indigo" | "purple" | "pink" | "black";
    size?: "sm" | "md" | "lg";
    rounded?: boolean | "full";
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
}

export const IconButton: FC<IconButtonProps>;