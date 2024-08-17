import { cva } from "class-variance-authority";

export const avatarStyles = cva([
    "relative",
    "flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "overflow-hidden",
    "font-medium",
    "bg-gray-300",
    "select-none",
], {
    variants: {
        variant: {
            circle: "rounded-full",
            rounded: "rounded",
            square: "rounded-none",
        },
        size: {
            sm: "w-8 h-8",
            md: "w-10 h-10",
            lg: "w-12 h-12",
        }
    },
    defaultVariants: {
        variant: "circle",
        size: "md",
    },
})