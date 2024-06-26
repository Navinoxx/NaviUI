import { FC } from "react";

interface AlertProps {
    variant: "success" | "error" | "warning" | "info";
    message: string;
    withIcon?: boolean
}

export const Alert: FC<AlertProps>;