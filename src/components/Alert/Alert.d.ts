import { FC } from "react";

interface AlertProps {
    severity: "success" | "error" | "warning" | "info";
    message: string;
    icon?: boolean | React.ReactNode;
    className?: string | {
        alert?: string;
        icon?: string;
        message?: string;
        title?: string;
        closeButton?: string;
    }
}

interface AlertTitleProps {
    className?: string;
    children: React.ReactNode;
}

export const Alert: FC<AlertProps> & {
    Title: FC<AlertTitleProps>;
};