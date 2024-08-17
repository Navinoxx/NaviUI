import { FC } from "react";

interface SnackbarProps {
    autoHideDuration?: number
    disableWindowBlurListener?: boolean
    onClose?: () => void
    open?: boolean
    resumeHideDuration?: number
    message?: string
    position?: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight"
    children: React.ReactNode
    className?: string
}

export const Snackbar: FC<SnackbarProps>;