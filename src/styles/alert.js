import { cva } from "class-variance-authority";

export const alertStyles = cva(["flex items-center justify-center w-1"], {
    variants: {
        variant: {
            success: "bg-green-500 border-l-green-500",
            error: "bg-red-500 border-l-red-500",
            warning: "bg-yellow-500 border-l-yellow-500",
            info: "bg-blue-500 border-l-blue-500",
        },
        withIcon: {
            true: "w-12",
        },
        
    },
});

export const titleStyles = cva(["font-semibold"], {
    variants: {
        variant: {
            success: "text-green-500",
            error: "text-red-500",
            warning: "text-yellow-500",
            info: "text-blue-500",
        },
    },
})