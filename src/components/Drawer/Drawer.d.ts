import { FC } from "react";

export interface DrawerProps {
    open?: boolean;
    onClose?: (open: boolean) => void;
    placement?: "left" | "right" | "top" | "bottom";
    children?: React.ReactNode;
    className?: string;
}

export const Drawer: FC<DrawerProps>;