import { FC } from "react";

interface TabProps {
    value: string;
    icon?: React.ReactNode;
    iconPosition?: "start" | "end" | "top" | "bottom";
    label: string;
    className?: string;
}

export const Tab: FC<TabProps>;