import { FC } from "react";

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string | {
        container?: string;
        label?: string;
        checkbox?: string;
    }
}

export const Checkbox: FC<CheckboxProps>;