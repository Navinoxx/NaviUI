import { orientation, textColor } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const radioGroupStyles = cva([
    "flex",
    "w-full",
], {
    variants: {
        orientation
    },
    compoundVariants: [
        {
            orientation: "horizontal",
            className: "space-x-2",
        },
        {
            orientation: "vertical",
            className: "space-y-2",
        }
    ],
    defaultVariants: {
        orientation: "horizontal"
    }
});

export const radioStyles = cva([
    "relative",
    "inline-flex",
    "items-center",
    "cursor-pointer",
], {
    variants: {
        labelPlacement: {
            start: "flex-row-reverse",
            end: "",
            top: "flex-col-reverse",
            bottom: "flex-col"
        }
    },
    compoundVariants: [
        {
            labelPlacement: ["start", "end"],
            className: "space-x-2",
        },
        {
            labelPlacement: ["top", "bottom"],
            className: "space-y-2",
        },
    ],
    defaultVariants: {
        labelPlacement: "end"
    }
});

export const radioSvgStyles = cva([
    "flex",
    "items-center"
], {
    variants: {
        color: textColor
    },
    defaultVariants: {
        color: "blue"
    }
})