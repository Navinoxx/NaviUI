import { cva } from "class-variance-authority";

export const alertStyles = cva(["flex w-full max-w-sm overflow-hidden"], {
    variants: {
        severity: {
            success: "bg-green-700",
            error: "bg-red-700",
            warning: "bg-yellow-700",
            info: "bg-blue-700",
        },
    },
});

export const iconStyles = cva(["flex items-center justify-center pl-2 py-2 text-white"]);

export const messageStyles = cva(["flex flex-col justify-center w-full px-2 py-1"], {
    variants: {
        severity: {
            success: "text-green-200",
            error: "text-red-200",
            warning: "text-yellow-200",
            info: "text-blue-200",
        },
    },
})

export const titleStyles = cva(["font-semibold"])

export const closeButtonStyles = cva(["p-2 m-1 rounded-full hover:bg-opacity-50 transition-all duration-200"], {
    variants: {
        severity: {
            success: "text-green-200 hover:bg-green-400",
            error: "text-red-200 hover:bg-red-400",
            warning: "text-yellow-200 hover:bg-yellow-400",
            info: "text-blue-200 hover:bg-blue-400",
        },
    },
})