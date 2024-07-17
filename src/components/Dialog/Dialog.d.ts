import { FC } from "react";

interface DialogProps {
    open?: boolean;
    onClose?: () => void;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "xxl";
    className?: string;
    children?: React.ReactNode;
}

export const Dialog: FC<DialogProps>;