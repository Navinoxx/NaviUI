import { iconPosition } from "@/variants/variants";
import { cva } from "class-variance-authority";

export const containerStyles = cva([
    "inline-flex",
    "items-center",
    "relative",
    "gap-3",
], {
    variants: {
        placement: iconPosition
    },
    defaultVariants: {
        placement: "end"
    }
})

export const switchStyles = cva([
    "peer", 
    "rounded-full",
    "bg-gray-300",
    "outline-none",
    "peer-checked:bg-gradient-to-r",
    "shadow-inner",
    "peer-focus:outline-none",
    "after:content-['']",
    "after:rounded-full",
    "after:absolute",
    "after:outline-none",
    "after:top-1/2",
    "after:-translate-y-1/2",
    "after:bg-gray-200",
    "after:-left-2",
    "after:flex",
    "after:justify-center",
    "after:items-center",
    "peer-checked:after:translate-x-14",
    "transition-all",
    "duration-500",
    "after:duration-300",
], {
    variants: {
        color: {
            blue: "peer-checked:from-blue-500 peer-checked:to-blue-900 peer-checked:after:bg-blue-500",
            red: "peer-checked:from-red-500 peer-checked:to-red-900 peer-checked:after:bg-red-500",
            green: "peer-checked:from-green-500 peer-checked:to-green-900 peer-checked:after:bg-green-500",
            indigo: "peer-checked:from-indigo-500 peer-checked:to-indigo-900 peer-checked:after:bg-indigo-500",
            purple: "peer-checked:from-purple-500 peer-checked:to-purple-900 peer-checked:after:bg-purple-500",
            pink: "peer-checked:from-pink-500 peer-checked:to-pink-900 peer-checked:after:bg-pink-500",
            black: "peer-checked:from-gray-800 peer-checked:to-black peer-checked:after:bg-gray-800",
        },
        size: {
            sm: "w-10 h-4 after:w-6 after:h-6 peer-checked:after:translate-x-7",
            md: "w-16 h-6 after:w-9 after:h-9 peer-checked:after:translate-x-11",
            lg: "w-20 h-8 after:w-12 after:h-12 peer-checked:after:translate-x-14",
        },
        disabled: {
            true: "opacity-50",
        }
    },
    defaultVariants: {
        color: "blue",
        size: "sm",
    },
});

export const labelStyles = cva([
    "text-sm", 
    "font-medium"
], {
    variants: {
        disabled: {
            true: "opacity-50",
        }
    },
    defaultVariants: {
        disabled: false,
    },
});