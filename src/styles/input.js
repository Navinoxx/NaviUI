import { focusBorderColor } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const inputStyles = cva([
    "border-b",
    "border-gray-300",
    "py-1",
    "focus:border-b-2",
    "placeholder-transparent",
    "focus:placeholder-gray-300",
    "focus:outline-none",
    "transition-colors",
    "peer",
    "bg-inherit",
], {
    variants: {
        color: focusBorderColor,
        disabled: {
            true: "opacity-50 pointer-events-none",
            false: "",
        },
    },
    defaultVariants: {
        disabled: false,
    },
});

export const labelStyles = cva([
    "absolute",
    "left-0",
    "top-1",
    "cursor-text",
    "peer-focus:text-xs",
    "peer-focus:-top-4",
    "peer-[:not(:placeholder-shown)]:text-xs",
    "peer-[:not(:placeholder-shown)]:-top-4",
    "peer-placeholder-shown:text-base",
    "peer-placeholder-shown:text-gray-300",
    "transition-all",
    "pointer-events-none",
], {
    variants: {
        color: {
            blue: "peer-focus:text-blue-600",
            green: "peer-focus:text-green-600",
            red: "peer-focus:text-red-600",
            indigo: "peer-focus:text-indigo-600",
            purple: "peer-focus:text-purple-600",
            pink: "peer-focus:text-pink-600",
            black: "peer-focus:text-black",
        },
        disabled: {
            true: "text-gray-300",
            false: "",
        },
    },
    defaultVariants: {
        disabled: false,
    },
});
