import { cva } from "class-variance-authority";
import { bgColor } from "@/variants/variants";

export const loaderStyles = cva(["rounded-full"], {
    variants: {
        animation: {
            bounce: "animate-bounce",
            pulse: "animate-pulse",
            ping: "animate-ping",
            fade: "animate-fade",
            scale: "animate-scale",
            flip: "animate-flip",
        },
        color: bgColor,
        size: {
            sm: "w-4 h-4",
            md: "w-6 h-6",
            lg: "w-8 h-8",
        },
    },
    defaultVariants: {
        animation: "bounce",
        color: "blue",
        size: "md",
    },
})