import { FC } from "react";

interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    marks?: boolean;
    initialValue?: number;
    orientation?: "vertical" | "horizontal";
    onChange?: (value: number) => void;
    disabled?: boolean;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    className?: string;
}

export const Slider: FC<SliderProps>;