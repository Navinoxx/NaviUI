import { FC } from "react";

interface SelectProps {
    id: string;
    label: string;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    multiple?: boolean;
    className?: string;
    children: React.ReactNode;
}

interface SelectOptionProps {
    value: string;
    children: React.ReactNode;
}

export const Select: FC<SelectProps> & {
    Option: FC<SelectOptionProps>;
};