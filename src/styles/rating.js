import { cva } from "class-variance-authority";

export const ratingStyles = cva([
    "text-transparent",
    "cursor-pointer",
], {
    variants: {
        disabled: {
            true: "opacity-50 pointer-events-none",
            false: "",
        },
        readOnly: {
            true: "pointer-events-none",
            false: "",
        }
    },
    defaultVariants: {
        disabled: false,
    },
})