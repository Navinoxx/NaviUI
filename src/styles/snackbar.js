import { cva } from "class-variance-authority";

export const snackbarStyles = cva([
    "fixed",
    "flex",
    "min-w-48",
    "m-4",
    "z-50",
], {
    variants: {
        position: {
            topCenter: "top-0 left-1/2 -translate-x-1/2",
            topLeft: "top-0 left-0",
            topRight: "top-0 right-0",
            bottomCenter: "bottom-0 left-1/2 -translate-x-1/2",
            bottomLeft: "bottom-0 left-0",
            bottomRight: "bottom-0 right-0",
        }
    },
    defaultVariants: {
        position: "bottomLeft"
    }
})

export const snackbarContentStyles = cva([
    "flex",
    "w-full",
    "gap-4",
    "justify-between",
    "items-center",
    "p-2",
    "border",
    "rounded",
], {
    variants: {
        variant: {
            success: [
                "bg-green-500",
                "border-green-600",
                "text-green-100"
            ],
            error: [
                "bg-red-500",
                "border-red-600",
                "text-red-100"
            ],
            warning: [
                "bg-yellow-500",
                "border-yellow-600",
                "text-yellow-100"
            ],
            info: [
                "bg-blue-500",
                "border-blue-600",
                "text-blue-100"
            ],
            default: [
                "bg-gray-500",
                "border-gray-600",
                "text-gray-100"
            ]
        },
    },
    defaultVariants: {
        variant: "default"
    }
})