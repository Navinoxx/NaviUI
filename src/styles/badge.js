import { cva } from "class-variance-authority";
import { bgColor } from "@/variants/variants";

export const containerBadgeStyles = cva([
    "inline-flex", 
    "relative",
], {});

export const badgeStyles = cva([
    "flex",
    "absolute",
    "items-center",
    "justify-center",
    "rounded-full",
    "text-xs",
    "px-2",
    "py-0.5",
    "font-medium",
    "box-border",
    "text-white",
    "min-h-3",
    "min-w-3",
], {
    variants: {
        color: bgColor,
        placement: {
            topLeft: "-top-1 -left-2",
            topRight: "-top-1 -right-2",
            bottomLeft: "-bottom-1 -left-2",
            bottomRight: "-bottom-1 -right-2",
        },
    },
    defaultVariants: {
        color: "red",
        placement: "topRight",
    }
})

export const dotStyles = cva([
    "flex",
    "absolute",
    "rounded-full",
    "px-1",
    "py-1",
    "min-h-3",
    "min-w-3",
], {
    variants: {
        color: bgColor,
        placement: {
            topLeft: "-top-0.5 -left-1",
            topRight: "-top-0.5 -right-1",
            bottomLeft: "-bottom-0.5 -left-1",
            bottomRight: "-bottom-0.5 -right-1",
        }
    },
    defaultVariants: {
        color: "red",
        placement: "topRight",
    }
})