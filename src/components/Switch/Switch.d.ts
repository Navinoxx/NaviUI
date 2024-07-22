import { FC } from "react";

interface SwitchProps {
    label?: string;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placement?: "start" | "end" | "bottom" | "top";
    className?: string;
    labelClassName?: string;
}

export const Switch: FC<SwitchProps>;