import { cva } from "class-variance-authority";
import { bgColor } from "@/variants/variants";

export const tooltipContainerStyles = cva([
    "relative",
    "inline-block",
], {})

export const tooltipStyles = cva([
    "absolute",
    "w-max",
    "max-w-xs",
    "text-xs",
    "rounded",
    "text-center",
    "text-white",
    "px-2",
    "py-1",
    "z-10",
], {
    variants: {
        color: bgColor,
        placement: {
            top: "bottom-full left-1/2 translate-x-1/2 mb-2",
            topStart: "bottom-full left-0 mb-2",
            topEnd: "bottom-full right-0 mb-2",
            right: "left-full top-1/2 translate-y-1/2 ml-2",
            rightStart: "left-full top-0 ml-2",
            rightEnd: "left-full bottom-0 ml-2",
            bottom: "top-full left-1/2 translate-x-1/2 mt-2",
            bottomStart: "top-full left-0 mt-2",
            bottomEnd: "top-full right-0 mt-2",
            left: "right-full top-1/2 translate-y-1/2 mr-2",
            leftStart: "right-full top-0 mr-2",
            leftEnd: "right-full bottom-0 mr-2",
        },
    },
    defaultVariants: {
        color: "black",
        placement: "top",
    },
})

export const arrowStyles = cva([
    "absolute",
], {
    variants: {
        placement: {
            top: "h-2 w-full left-0 top-full",
            topStart: "h-2 w-full left-0 top-full",
            topEnd: "h-2 w-full left-0 top-full",
            right: "w-2 h-full top-0 right-full rotate-90",
            rightStart: "w-2 h-full top-0 right-full rotate-90",
            rightEnd: "w-2 h-full top-0 right-full rotate-90",
            bottom: "h-2 w-full left-0 bottom-full rotate-180",
            bottomStart: "h-2 w-full left-0 bottom-full rotate-180",
            bottomEnd: "h-2 w-full left-0 bottom-full rotate-180",
            left: "w-2 h-full top-0 left-full -rotate-90",
            leftStart: "w-2 h-full top-0 left-full -rotate-90",
            leftEnd: "w-2 h-full top-0 left-full -rotate-90",
        },
        color: {
            blue: "fill-blue-500",
            green: "fill-green-500",
            red: "fill-red-500",
            indigo: "fill-indigo-500",
            purple: "fill-purple-500",
            pink: "fill-pink-500",
            black: "fill-black",
        }
    },
    defaultVariants: {
        color: "black",
        placement: "top",
    },
})
