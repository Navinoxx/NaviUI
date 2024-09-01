import { FC } from "react";

export interface ButtonProps {
    component?: 'string';
    type?: 'string';
    variant?: 'solid' | 'shadow' | 'outlined' | 'ghost';
    color?: 'blue' | 'red' | 'green' | 'indigo' | 'purple' | 'pink' | 'black';
    size?: 'sm' | 'md' | 'lg';
    rounded?: boolean | "full";
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
}

export const Button: FC<ButtonProps>;
