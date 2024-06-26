import { FC } from "react";

type color = "blue" | "green" | "red" | "indigo" | "purple" | "pink" | "black";

interface TabsProps {
    defaultValue?: string;
    orientation?: "horizontal" | "vertical";
    indicatorPosition?: "top" | "bottom" | "left" | "right";
    indicatorColor?: color;
    textColor?: color;
    indicatorCustom?: string;
    className?: string;
    children: React.ReactNode;
}

export const Tabs: FC<TabsProps>;