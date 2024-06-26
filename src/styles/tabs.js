import { cva } from "class-variance-authority";
import { textColor, bgColor, position, orientation, iconPosition } from "@/variants/variants";

export const tabsStyles = cva([
    "flex",
    "w-full",
], {
    variants: {
        orientation,
    },
})

export const tabStyles = cva([
    "flex",
    "relative",
    "justify-center",
    "items-center",
    "px-4",
    "py-2",
    "gap-2",
], {
    variants: {
        textColor,
        iconPosition,
    },
    defaultVariants: {
        textColor: "blue",
    }
})


export const tabIndicatorStyles = cva([
    "absolute",
], {
    variants: {
        indicatorPosition: position,
        indicatorColor: bgColor,
    },
    compoundVariants: [
        {
            indicatorPosition: ["top", "bottom"],
            className: "w-full h-0.5",
        },
        {
            indicatorPosition: ["left", "right"],
            className: "w-0.5 h-full",
        }
    ],
    defaultVariants: {
        indicatorPosition: "bottom",
        indicatorColor: "blue",
    }
})