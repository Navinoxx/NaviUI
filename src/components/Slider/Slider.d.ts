import { FC } from "react";

interface SliderProps {
    min?: number;
    max: number;
    step?: number;
    marks?: boolean | {
        step: number;
        value: number;
        label: string;
    };
    initialValue?: number;
    value?: number | number[];
    orientation?: "vertical" | "horizontal";
    onChange?: (value: number | number[]) => void;
    disabled?: boolean;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    valueLabelDisplay?: boolean;
    className?: string;
    railClassName?: string;
    trackClassName?: string;
    thumbClassName?: string;
    marksClassName?: string;
}

export const Slider: FC<SliderProps>;