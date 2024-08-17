import { FC } from "react";
import { RadioProps } from "../Radio/Radio";

interface RadioGroupProps {
    defaultValue?: string;
    value?: string;
    orientation?: "horizontal" | "vertical";
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children: React.ReactNode;
}

export const RadioGroup: FC<RadioGroupProps> & {
    Radio: FC<RadioProps>;
}