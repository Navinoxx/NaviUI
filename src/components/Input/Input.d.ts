import { FC, ReactNode } from "react";

export interface InputProps {
    label?: string;
    type?: string;
    color?: 'blue' | 'red' | 'green' | 'indigo' | 'purple' | 'pink' | 'black';
    disabled?: boolean;
    className?: string;
}

export const Input: FC<InputProps>;