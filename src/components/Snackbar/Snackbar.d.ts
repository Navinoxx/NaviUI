import { FC } from "react";

interface SnackbarProps {
    children: React.ReactNode
    className?: string
}

export const Snackbar: FC<SnackbarProps>;