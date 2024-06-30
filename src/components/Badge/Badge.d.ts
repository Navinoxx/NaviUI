import { FC } from "react";

interface BadgeProps {
    content: number;
	color?: "blue" | "red" | "green" | "indigo" | "purple" | "pink" | "black";
	max?: number;
    dot?: boolean;
    placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    invisible?: boolean;
	showZero?: boolean;
    className?: string;
    children: React.ReactNode;
}

export const Badge: FC<BadgeProps>;