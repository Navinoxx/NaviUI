import { FC, ReactNode } from 'react';

interface AccordionProps {
    icon?: boolean;
    variant?: "solid" | "outline" | "ghost";
    color?: "blue" | "green" | "red" | "indigo" | "purple" | "pink" | "black";
    className?: string;
    children: ReactNode;
}

interface AccordionHeaderProps {
    iconFirst?: boolean;
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

interface AccordionBodyProps {
    className?: string;
    children: ReactNode;
}

export const Accordion: FC<AccordionProps> & {
    Header: FC<AccordionHeaderProps>;
    Body: FC<AccordionBodyProps>;
}