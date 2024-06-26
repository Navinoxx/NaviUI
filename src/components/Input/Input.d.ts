import { FC } from "react";

export interface InputProps {
    id: string | number;
    label?: string;
    type?: string;
    color?: 'blue' | 'red' | 'green' | 'indigo' | 'purple' | 'pink' | 'black';
    disabled?: boolean;
    className?: string;
}

export const Input: FC<InputProps>;