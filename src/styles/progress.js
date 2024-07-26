import { bgColor, textColor } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const CircularProgressStyles = cva([
    "block",
    "w-full",
], {
    variants: {
        color: textColor
    },
    defaultVariants: {
        color: "blue"
    }
});


export const LinearProgressStyles = cva([
    "relative",
    "w-full",
    "overflow-hidden",
    "bg-opacity-50",
], {
    variants: {
        color: bgColor
    },
    defaultVariants: {
        color: "blue"
    }
});

export const linearBarStyles = cva([
    "absolute",
    "left-0",
    "top-0",
    "w-auto",
    "h-full",
], {
    variants: {
        color: bgColor
    },
    defaultVariants: {
        color: "blue"
    }
});