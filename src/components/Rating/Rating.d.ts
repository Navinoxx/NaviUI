import { FC } from "react";

interface RatingProps {
    name?: string;
    max: number;
    value: number;
    defaultValue?: number;
    icon?: JSX.Element;
    iconColor?: string;
    onChange?: (value: number) => void;
    disabled?: boolean;
    readOnly?: boolean;
    className?: string;
}

export const Rating: FC<RatingProps>;