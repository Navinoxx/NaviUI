import { FC } from "react";

interface TooltipProps {
    content: string;
    color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
    placement?: "top" | "topStart" | "topEnd" | "right" | "rightStart" | "rightEnd" | "bottom" | "bottomStart" | "bottomEnd" | "left" | "leftStart" | "leftEnd";
    arrow: boolean;
    className?: string;
    children: React.ReactNode;
}

export const Tooltip: FC<TooltipProps>;