import { cva } from "class-variance-authority";
import { borderColor } from "@/variants/variants";

export const spinnerStyles = cva(["animate-spin", "rounded-full"], {
    variants: {
        variant: {
            regular: "!border-t-transparent",
            double: "border-x-transparent",
            edge: "border-x",
            dashed: "border-dashed",
        },
        color: borderColor,
        size: {
            sm: "w-12 h-12 border-4",
            md: "w-20 h-20 border-[6px]",
            lg: "w-28 h-28 border-8",
        },
    },
    defaultVariants: {
        variant: "regular",
        color: "blue",
        size: "md",
    },
})