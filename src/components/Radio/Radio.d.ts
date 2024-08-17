import { FC } from "react";

interface RadioProps {
    value: string;
    label: string;
    checked?: boolean;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    size?: number | string;
    labelPlacement?: "start" | "end" | "top" | "bottom";
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<RadioProps>;