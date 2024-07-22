import { FC } from "react";

interface RatingProps {
    name?: string;
    max: number;
    value: number;
    onChange?: (value: number) => void;
    className?: string;
}

export const Rating: FC<RatingProps>;